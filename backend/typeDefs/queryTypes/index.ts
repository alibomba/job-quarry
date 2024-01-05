import authQueries from "./authQueries";
import notificationQueries from "./notificationQueries";
import searchQueries from "./searchQueries";

export default `#graphql
    type Query{
        ${authQueries}
        ${notificationQueries}
        ${searchQueries}
        getTechnologies: [String!]!
    }
`;