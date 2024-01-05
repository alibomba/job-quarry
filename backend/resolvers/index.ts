import authResolvers from "./authResolvers"
import notificationResolvers from "./notificationResolvers"
import searchResolvers from "./searchResolvers"

export default {
    Query: {
        ...authResolvers.Query,
        ...notificationResolvers.Query,
        ...searchResolvers.Query
    },
    Mutation: {
        ...authResolvers.Mutation,
        ...notificationResolvers.Mutation
    },
    // Subscription:{
    //     ...notificationResolvers.Subscription
    // }
}