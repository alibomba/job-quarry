import notificationSubscriptions from "./notificationSubscriptions";

export default `#graphql
    type Subscription{
        ${notificationSubscriptions}
    }
`;