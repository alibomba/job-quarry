import { GraphQLError } from "graphql";
import { ApplicationInput, MyContext } from "../types"
import applicationValidation from "../utils/applicationValidation";
import contextAuthentication from "../middleware/contextAuthentication";
import { Application, Offer } from "../models";

export default {
    Query: {
        async getMyApplicationsCompany(__: unknown, { page }: { page: number }, context: MyContext) {
            const company = await contextAuthentication(context);
            if (!company.isCompany) throw new GraphQLError('Użytkownik nie może otrzymywać aplikacji', { extensions: { code: 'FORBIDDEN' } });
            if (page < 1) throw new GraphQLError('Podaj poprawny numer strony', { extensions: { code: 'VALIDATION_ERROR' } });
            const offers = await Offer.find({ company: company._id });
            const applications = await Promise.all(offers.map(async offer => {
                const applications = await Application.find({ offer: offer._id }).populate('offer user');
                return applications;
            }));
            const applicationsFlat = applications.flat();
            if (applicationsFlat.length === 0) {
                return {
                    currentPage: 1,
                    lastPage: 1,
                    data: []
                }
            }
            const PER_PAGE = 12;
            const lastPage = Math.ceil(applicationsFlat.length / PER_PAGE);
            if (page > lastPage) throw new GraphQLError(`Jest tylko ${lastPage} stron`, { extensions: { code: 'VALIDATION_ERROR' } });
            const startIndex = (page - 1) * PER_PAGE;
            const endIndex = page * PER_PAGE;
            const data = applicationsFlat.slice(startIndex, endIndex);
            return {
                currentPage: page,
                lastPage,
                data
            }
        }
    },
    Mutation: {
        async sendApplication(__: unknown, applicationInput: ApplicationInput, context: MyContext) {
            await applicationValidation(applicationInput);
            let user;
            try {
                user = await contextAuthentication(context);
            } catch (err) {
                user = null;
            }
            if (user && user.isCompany) throw new GraphQLError('Firma nie może składać aplikacji', { extensions: { code: 'VALIDATION_ERROR' } });
            const { applicationInput: { name, surname, email, phoneNumber, cvUrl, details, offerId } } = applicationInput;
            const offer = await Offer.findById(offerId);
            if (!offer) throw new GraphQLError('Nie znaleziono oferty', { extensions: { code: 'NOT_FOUND' } });
            try {
                let application;
                for (let i = 0; i < 100; i++) {
                    const newApplication = await Application.create({ name, surname, email, phoneNumber, CV: cvUrl, details, offer: offerId, user: user && user._id });
                    application = await newApplication.populate('offer user');
                }
                return application;

                // const newApplication = await Application.create({ name, surname, email, phoneNumber, CV: cvUrl, details, offer: offerId, user: user && user._id });
                // const applicationPopulated = await newApplication.populate('offer user');
                // return applicationPopulated;
            } catch (err) {
                throw new GraphQLError('', { extensions: { code: 'SERVER_ERROR' } });
            }
        }
    }
}