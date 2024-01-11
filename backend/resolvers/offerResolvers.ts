import { GraphQLError } from "graphql";
import contextAuthentication from "../middleware/contextAuthentication"
import { MyContext } from "../types"
import { Bookmark, Offer } from "../models";
import getAWSCompanyLogo from "../utils/getAWSCompanyLogo";

export default {
    Query: {
        async isBookmarked(__: unknown, { id }: { id: string }, context: MyContext) {
            const user = await contextAuthentication(context);
            if (user.isCompany) throw new GraphQLError('Firma nie może mieć zapisanych ofert', { extensions: { code: 'VALIDATION_ERROR' } });
            try {
                const offer = await Offer.findById(id);
                if (!offer) throw new GraphQLError('Nie znaleziono oferty', { extensions: { code: 'NOT_FOUND' } });
            } catch (err: any) {
                if (err.name === 'CastError' && err.kind === 'ObjectId') {
                    throw new GraphQLError('Nie znaleziono oferty', { extensions: { code: 'NOT_FOUND' } });
                }
                else {
                    throw new GraphQLError('', { extensions: { code: 'SERVER_ERROR' } });
                }
            }
            const bookmarkFound = await Bookmark.findOne({ user: user._id, offer: id });
            let success;
            if (bookmarkFound) success = true;
            else success = false;
            return {
                success
            }
        },
        async getOffer(__: unknown, { id }: { id: string }) {
            let offer;
            try {
                offer = await Offer.findById(id).populate('company');
            } catch (err: any) {
                if (err.name === 'CastError' && err.kind === 'ObjectId') {
                    throw new GraphQLError('Nie znaleziono oferty', { extensions: { code: 'NOT_FOUND' } });
                } else {
                    throw new GraphQLError('', { extensions: { code: 'SERVER_ERROR' } });
                }
            }
            if (!offer) throw new GraphQLError('Nie znaleziono oferty', { extensions: { code: 'NOT_FOUND' } });
            // if (typeof offer.company !== 'string' && offer.company.logo) {
            //     offer.company.logo = await getAWSCompanyLogo(offer.company.logo);
            // }
            return offer;
        },
        async myOffers(__: unknown, _: unknown, context: MyContext) {
            const company = await contextAuthentication(context);
            if (!company.isCompany) throw new GraphQLError('Użytkownik nie może mieć swoich ofert', { extensions: { code: 'FORBIDDEN' } });
            const offers = await Offer.find({ company: company._id }).populate('company');
            return offers;
        }
    },
    Mutation: {
        async bookmark(__: unknown, { id }: { id: string }, context: MyContext) {
            const user = await contextAuthentication(context);
            if (user.isCompany) throw new GraphQLError('Firma nie może mieć zapisanych ofert', { extensions: { code: 'VALIDATION_ERROR' } });
            let offer;
            try {
                offer = await Offer.findById(id);
                if (!offer) throw new GraphQLError('Nie znaleziono oferty', { extensions: { code: 'NOT_FOUND' } });
            } catch (err: any) {
                if (err.name === 'CastError' && err.kind === 'ObjectId') {
                    throw new GraphQLError('Nie znaleziono oferty', { extensions: { code: 'NOT_FOUND' } });
                }
                else {
                    throw new GraphQLError('', { extensions: { code: 'SERVER_ERROR' } });
                }
            }
            const bookmarkFound = await Bookmark.findOne({ user: user._id, offer: id });
            if (bookmarkFound) {
                try {
                    await Bookmark.deleteOne({ _id: bookmarkFound._id });
                    return {
                        isBookmarked: false
                    }
                } catch (err) {
                    throw new GraphQLError('', { extensions: { code: 'SERVER_ERROR' } });
                }
            } else {
                try {
                    await Bookmark.create({ user: user._id, offer: offer._id });
                    return {
                        isBookmarked: true
                    }
                } catch (err) {
                    throw new GraphQLError('', { extensions: { code: 'SERVER_ERROR' } });
                }
            }
        },
        async deleteOffer(__: unknown, { id }: { id: string }, context: MyContext) {
            const company = await contextAuthentication(context);
            if (!company.isCompany) throw new GraphQLError('Użytkownik nie może usuwać ofert', { extensions: { code: 'FORBIDDEN' } });
            let offer;
            try {
                offer = await Offer.findById(id).populate('company');
            } catch (err: any) {
                if (err.name === 'CastError' && err.kind === 'ObjectId') {
                    throw new GraphQLError('Nie znaleziono oferty', { extensions: { code: 'NOT_FOUND' } });
                }
                else {
                    throw new GraphQLError('', { extensions: { code: 'SERVER_ERROR' } });
                }
            }
            if (!offer) throw new GraphQLError('Nie znaleziono oferty', { extensions: { code: 'NOT_FOUND' } });
            if (typeof offer.company !== 'string' && offer.company._id != company._id) throw new GraphQLError('Nie możesz usunąć nie swojej oferty', { extensions: { code: 'FORBIDDEN' } });
            try {
                await Offer.findOneAndDelete({ _id: offer._id });
                return {
                    success: true
                }
            } catch (err) {
                throw new GraphQLError('', { extensions: { code: 'SERVER_ERROR' } });
            }
        }
    }
}