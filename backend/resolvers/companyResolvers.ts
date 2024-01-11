import { GraphQLError } from "graphql";
import { Company, Offer } from "../models";
import getAWSCompanyLogo from "../utils/getAWSCompanyLogo";


export default {
    Query: {
        async getCompany(__: unknown, { id }: { id: string }) {
            let company;
            try {
                company = await Company.findById(id);
            } catch (err: any) {
                if (err.name === 'CastError' && err.kind === 'ObjectId') {
                    throw new GraphQLError('Nie znaleziono firmy', { extensions: { code: 'NOT_FOUND' } });
                }
                else {
                    throw new GraphQLError('', { extensions: { code: 'SERVER_ERROR' } });
                }
            }
            if (!company) throw new GraphQLError('Nie znaleziono firmy', { extensions: { code: 'NOT_FOUND' } });
            const offers = await Offer.find({ company: company._id });
            if (company.logo) {
                company.logo = await getAWSCompanyLogo(company.logo);
            }
            return {
                ...company.toJSON(),
                offers
            }
        }
    }
}