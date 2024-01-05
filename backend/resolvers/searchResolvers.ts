import { Offer } from "../models";
import { OfferQueryType, OfferSearchInput } from "../types"
import searchValidation from "../utils/searchValidation"
import mapEnumToQuery from "../utils/mapEnumToQuery";
import { GraphQLError } from "graphql";

const PER_PAGE = 6;

export default {
    Query: {
        async search(__: unknown, searchInput: OfferSearchInput) {
            searchValidation(searchInput);
            const { searchInput: { phrase, city, level, contractType, mode, technologies, salaryFrom, salaryTo, page } } = searchInput;
            const query: OfferQueryType = {};
            if (phrase) {
                query.$or = [
                    { title: { $regex: phrase, $options: 'i' } },
                    { description: { $regex: phrase, $options: 'i' } }
                ];
            }
            if (city) {
                query.location = city;
            }
            if (level) {
                query.level = mapEnumToQuery('level', level);
            }
            if (contractType) {
                query.contractType = mapEnumToQuery('contractType', contractType);
            }
            if (mode) {
                query.mode = mapEnumToQuery('mode', mode);
            }
            if (technologies && technologies.length > 0) {
                query.requiredTechnologies = { $in: technologies };
            }
            if (salaryFrom && salaryTo) {
                query.salary = { $gte: salaryFrom, $lte: salaryTo };
            }
            if (salaryFrom && !salaryTo) {
                query.salary = { $gte: salaryFrom };
            }
            if (!salaryFrom && salaryTo) {
                query.salary = { $lte: salaryTo };
            }
            const count = await Offer.countDocuments(query);
            const lastPage = Math.ceil(count / PER_PAGE);
            if (page > lastPage) throw new GraphQLError(`Jest tylko ${lastPage} stron`, { extensions: { code: 'VALIDATION_ERROR' } });
            const offset = (page - 1) * PER_PAGE;
            const offers = await Offer.find(query).skip(offset).limit(PER_PAGE).populate('company');
            return {
                currentPage: page,
                lastPage,
                data: offers
            }
        }
    }
}