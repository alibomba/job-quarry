import authMutations from "./authMutations";
import notificationMutations from "./notificationMutations";

export default `#graphql
    type Mutation{
        ${authMutations}
        ${notificationMutations}
    }
`;