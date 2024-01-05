import authResolvers from "./authResolvers"
import notificationResolvers from "./notificationResolvers"

export default {
    Query: {
        ...authResolvers.Query,
        ...notificationResolvers.Query
    },
    Mutation: {
        ...authResolvers.Mutation,
        ...notificationResolvers.Mutation
    },
    // Subscription:{
    //     ...notificationResolvers.Subscription
    // }
}