import { Offer } from "../models";
import { OfferQueryType, OfferSearchInput } from "../types"
import searchValidation from "../utils/searchValidation"
import mapEnumToQuery from "../utils/mapEnumToQuery";

export default {
    Query: {
        async search(__: unknown, searchInput: OfferSearchInput) {
            searchValidation(searchInput);
            const { phrase, city, level, contractType, mode, technologies, salaryFrom, salaryTo } = searchInput;
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

            const offers = await Offer.find(query).populate('company');
            return offers;
        }
    }
}