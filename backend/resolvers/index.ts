import authResolvers from "./authResolvers"
import notificationResolvers from "./notificationResolvers"
import offerResolvers from "./offerResolvers"
import searchResolvers from "./searchResolvers"

export default {
    Query: {
        ...authResolvers.Query,
        ...notificationResolvers.Query,
        ...offerResolvers.Query,
        ...searchResolvers.Query
    },
    Mutation: {
        ...authResolvers.Mutation,
        ...notificationResolvers.Mutation,
        ...offerResolvers.Mutation
    },
    // Subscription:{
    //     ...notificationResolvers.Subscription
    // }
}