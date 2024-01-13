import authResolvers from "./authResolvers"
import notificationResolvers from "./notificationResolvers"
import offerResolvers from "./offerResolvers"
import searchResolvers from "./searchResolvers"
import applicationResolvers from "./applicationResolvers"
import userResolvers from "./userResolvers"
import companyResolvers from "./companyResolvers"
import analyticsResolvers from "./analyticsResolvers"

export default {
    Query: {
        ...authResolvers.Query,
        ...notificationResolvers.Query,
        ...offerResolvers.Query,
        ...applicationResolvers.Query,
        ...searchResolvers.Query,
        ...userResolvers.Query,
        ...companyResolvers.Query
    },
    Mutation: {
        ...authResolvers.Mutation,
        ...notificationResolvers.Mutation,
        ...offerResolvers.Mutation,
        ...applicationResolvers.Mutation,
        ...analyticsResolvers.Mutation
    },
    Subscription: {
        ...notificationResolvers.Subscription
    }
}