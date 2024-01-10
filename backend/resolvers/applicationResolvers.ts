import { GraphQLError } from "graphql";
import { ApplicationInput, MyContext } from "../types"
import applicationValidation from "../utils/applicationValidation";
import contextAuthentication from "../middleware/contextAuthentication";
import { Application, Offer } from "../models";

export default {
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
                const newApplication = await Application.create({ name, surname, email, phoneNumber, CV: cvUrl, details, offer: offerId, user: user && user._id });
                const applicationPopulated = await newApplication.populate('offer user');
                return applicationPopulated;
            } catch (err) {
                throw new GraphQLError('', { extensions: { code: 'SERVER_ERROR' } });
            }
        }
    }
}