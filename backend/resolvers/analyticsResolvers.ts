import { GraphQLError } from "graphql";
import { Offer, OfferThumbnailView, OfferView } from "../models";


export default {
    Mutation: {
        async addThumbnailView(__: unknown, { id }: { id: string }) {
            let offer;
            try {
                offer = await Offer.findById(id);
            } catch (err: any) {
                if (err.name === 'CastError' && err.kind === 'ObjectId') {
                    throw new GraphQLError('Oferta nie istnieje', { extensions: { code: 'NOT_FOUND' } });
                }
                else {
                    throw new GraphQLError('', { extensions: { code: 'SERVER_ERROR' } });
                }
            }
            if (!offer) throw new GraphQLError('Oferta nie istnieje', { extensions: { code: 'NOT_FOUND' } });
            try {
                await OfferThumbnailView.create({ offer: offer._id });
                return {
                    success: true
                }
            } catch (err) {
                throw new GraphQLError('', { extensions: { code: 'SERVER_ERROR' } });
            }
        },
        async addView(__: unknown, { id }: { id: string }) {
            let offer;
            try {
                offer = await Offer.findById(id);
            } catch (err: any) {
                if (err.name === 'CastError' && err.kind === 'ObjectId') {
                    throw new GraphQLError('Oferta nie istnieje', { extensions: { code: 'NOT_FOUND' } });
                }
                else {
                    throw new GraphQLError('', { extensions: { code: 'SERVER_ERROR' } });
                }
            }
            if (!offer) throw new GraphQLError('Oferta nie istnieje', { extensions: { code: 'NOT_FOUND' } });
            try {
                await OfferView.create({ offer: offer._id });
                return {
                    success: true
                }
            } catch (err) {
                throw new GraphQLError('', { extensions: { code: 'SERVER_ERROR' } });
            }
        }
    }
}