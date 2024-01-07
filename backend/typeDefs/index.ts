import generalTypes from "./generalTypes";
import authTypes from "./authTypes";
import notificationTypes from "./notificationTypes";

import queryTypes from "./queryTypes";
import mutationTypes from "./mutationTypes";
import searchTypes from "./searchTypes";
import subscriptionTypes from "./subscriptionTypes";
import offerTypes from "./offerTypes";

export default `${generalTypes} ${authTypes} ${notificationTypes} ${offerTypes} ${searchTypes}
${queryTypes} ${mutationTypes} `;
// ${subscriptionTypes}