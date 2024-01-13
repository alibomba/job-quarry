import authMutations from "./authMutations";
import notificationMutations from "./notificationMutations";
import offerMutation from "./offerMutation";
import applicationMutations from "./applicationMutations";
import analyticsMutations from "./analyticsMutations";
import settingsMutations from "./settingsMutations";

export default `#graphql
    type Mutation{
        ${authMutations}
        ${notificationMutations}
        ${offerMutation}
        ${applicationMutations}
        ${analyticsMutations}
        ${settingsMutations}
    }
`;