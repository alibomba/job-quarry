import authResolvers from "./authResolvers"
import notificationResolvers from "./notificationResolvers"
import offerResolvers from "./offerResolvers"
import searchResolvers from "./searchResolvers"
import applicationResolvers from "./applicationResolvers"
import userResolvers from "./userResolvers"
import companyResolvers from "./companyResolvers"

export default {
    Query: {
        ...authResolvers.Query,
        ...notificationResolvers.Query,
        ...offerResolvers.Query,
        ...searchResolvers.Query,
        ...userResolvers.Query,
        ...companyResolvers.Query
    },
    Mutation: {
        ...authResolvers.Mutation,
        ...notificationResolvers.Mutation,
        ...offerResolvers.Mutation,
        ...applicationResolvers.Mutation
    },
    // Subscription:{
    //     ...notificationResolvers.Subscription
    // }
}