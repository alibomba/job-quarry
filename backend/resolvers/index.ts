import authResolvers from "./authResolvers"

export default {
    Query: {
        ...authResolvers.Query
    },
    Mutation: {
        ...authResolvers.Mutation
    }
}