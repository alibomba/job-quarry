import generalTypes from "./generalTypes";
import authTypes from "./authTypes";
import notificationTypes from "./notificationTypes";

import queryTypes from "./queryTypes";
import mutationTypes from "./mutationTypes";
import subscriptionTypes from "./subscriptionTypes";

export default `${generalTypes} ${authTypes} ${notificationTypes}
${queryTypes} ${mutationTypes} `;
// ${subscriptionTypes}