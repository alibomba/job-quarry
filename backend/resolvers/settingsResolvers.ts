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
            if (website) me.website = website;
            if (logo) me.logo = logo;
            if (facebook) me.socialMedia.facebook = facebook;
            if (instagram) me.socialMedia.instagram = instagram;
            if (linkedin) me.socialMedia.linkedin = linkedin;
            if (github) me.socialMedia.github = github;
            if (description) me.description = description;
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