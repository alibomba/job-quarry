import authQueries from "./authQueries";
import notificationQueries from "./notificationQueries";

export default `#graphql
    type Query{
        ${authQueries}
        ${notificationQueries}
    }
`;