import authQueries from "./authQueries";
import notificationQueries from "./notificationQueries";
import offerQueries from "./offerQueries";
import searchQueries from "./searchQueries";

export default `#graphql
    type Query{
        ${authQueries}
        ${notificationQueries}
        ${offerQueries}
        ${searchQueries}
        getTechnologies: [String!]!
    }
`;