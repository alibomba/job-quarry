import { GraphQLError } from "graphql";
import contextAuthentication from "../middleware/contextAuthentication"
import { MyContext } from "../types"
import { Bookmark, Offer } from "../models";

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
        }
    }
}