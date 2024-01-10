import authMutations from "./authMutations";
import notificationMutations from "./notificationMutations";
import offerMutation from "./offerMutation";
import applicationMutations from "./applicationMutations";

export default `#graphql
    type Mutation{
        ${authMutations}
        ${notificationMutations}
        ${offerMutation}
        ${applicationMutations}
    }
`;