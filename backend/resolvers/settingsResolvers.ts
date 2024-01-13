import { GraphQLError } from "graphql";
import contextAuthentication from "../middleware/contextAuthentication"
import { MyContext, CompanySettingsInput } from "../types"
import { Company } from "../models";
import getAWSResource from "../utils/getAWSResource";
import companySettingsValidation from "../utils/companySettingsValidation";
import { CompanyI } from "../models/Company";
import bcrypt from 'bcrypt';

export default {
    Query: {
        async getMeCompany(__: unknown, _: unknown, context: MyContext) {
            const company = await contextAuthentication(context);
            if (!company.isCompany) throw new GraphQLError('Musisz być firmą', { extensions: { code: 'FORBIDDEN' } });
            const companyDB = await Company.findById(company._id);
            if (!companyDB) throw new GraphQLError('Firma nie istnieje', { extensions: { code: 'FORBIDDEN' } });
            if (companyDB.logo) {
                companyDB.logo = await getAWSResource(`logos/${companyDB.logo}`);
            }
            return companyDB;
        }
    },
    Mutation: {
        async updateCompanySettings(__: unknown, args: CompanySettingsInput, context: MyContext) {
            const company = await contextAuthentication(context);
            if (!company.isCompany) throw new GraphQLError('Musisz być firmą', { extensions: { code: 'FORBIDDEN' } });
            const me = await Company.findById(company._id) as CompanyI;
            await companySettingsValidation(args, me);
            const { settingsInput: { companyName, email, password, website, logo, socialMedia: { facebook, instagram, linkedin, github }, description } } = args;
            me.companyName = companyName;
            me.email = email;
            if (password) me.password = await bcrypt.hash(password, 10);
            me.website = website;
            if (logo) me.logo = logo;
            me.socialMedia.facebook = facebook;
            me.socialMedia.instagram = instagram;
            me.socialMedia.linkedin = linkedin;
            me.socialMedia.github = github;
            me.description = description;
            try {
                await me.save();
                return {
                    success: true
                }
            } catch (err) {
                throw new GraphQLError('', { extensions: { code: 'SERVER_ERROR' } });
            }
        }
    }
}