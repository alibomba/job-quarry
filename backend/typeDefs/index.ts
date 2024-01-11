import generalTypes from "./generalTypes";
import authTypes from "./authTypes";
import notificationTypes from "./notificationTypes";
import applicationTypes from "./applicationTypes";

import queryTypes from "./queryTypes";
import mutationTypes from "./mutationTypes";
import searchTypes from "./searchTypes";
import subscriptionTypes from "./subscriptionTypes";
import offerTypes from "./offerTypes";
import companyTypes from "./companyTypes";

export default `${generalTypes} ${authTypes} ${offerTypes} ${searchTypes} ${applicationTypes} ${companyTypes} ${notificationTypes}
${queryTypes} ${mutationTypes} `;
// ${subscriptionTypes}