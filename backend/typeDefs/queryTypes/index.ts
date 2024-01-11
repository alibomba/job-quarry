import authQueries from "./authQueries";
import notificationQueries from "./notificationQueries";
import offerQueries from "./offerQueries";
import searchQueries from "./searchQueries";
import userQueries from "./userQueries";
import companyQueries from "./companyQueries";

export default `#graphql
    type Query{
        ${authQueries}
        ${notificationQueries}
        ${offerQueries}
        ${searchQueries}
        ${userQueries}
        ${companyQueries}
        getTechnologies: [String!]!
    }
`;