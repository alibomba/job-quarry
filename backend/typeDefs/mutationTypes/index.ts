import authMutations from "./authMutations";
import notificationMutations from "./notificationMutations";
import offerMutation from "./offerMutation";

export default `#graphql
    type Mutation{
        ${authMutations}
        ${notificationMutations}
        ${offerMutation}
    }
`;