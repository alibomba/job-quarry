import authResolvers from "./authResolvers"
import notificationResolvers from "./notificationResolvers"
import offerResolvers from "./offerResolvers"
import searchResolvers from "./searchResolvers"
import applicationResolvers from "./applicationResolvers"
import userResolvers from "./userResolvers"
import companyResolvers from "./companyResolvers"
import analyticsResolvers from "./analyticsResolvers"
import settingsResolvers from "./settingsResolvers"

export default {
    Query: {
        ...authResolvers.Query,
        ...notificationResolvers.Query,
        ...offerResolvers.Query,
        ...applicationResolvers.Query,
        ...searchResolvers.Query,
        ...userResolvers.Query,
        ...companyResolvers.Query,
        ...settingsResolvers.Query
    },
    Mutation: {
        ...authResolvers.Mutation,
        ...notificationResolvers.Mutation,
        ...offerResolvers.Mutation,
        ...applicationResolvers.Mutation,
        ...analyticsResolvers.Mutation,
        ...settingsResolvers.Mutation
    },
    Subscription: {
        ...notificationResolvers.Subscription
    }
}