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
import settingsTypes from "./settingsTypes";
import analyticsTypes from "./analyticsTypes";

export default `${generalTypes} ${authTypes} ${searchTypes} ${offerTypes} ${applicationTypes} ${companyTypes} ${notificationTypes} ${settingsTypes} ${analyticsTypes}
${queryTypes} ${mutationTypes} ${subscriptionTypes}`;