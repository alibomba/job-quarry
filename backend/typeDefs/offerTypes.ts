export default `#graphql
    type Offer{
        _id: String!
        title: String!
        mode: String!
        location: String!
        level: String!
        expiresAt: DateTime!
        contractType: String!
        salary: Int!
        requiredTechnologies: [String!]!
        optionalTechnologies: [String!]!
        description: String!
        tasks: [String!]!
        required: [String!]!
        optional: [String!]!
        benefits: [String!]!
        recruitmentStages: [String!]!
        company: Company!
        createdAt: DateTime!
    }

    type BookmarkResponse{
        isBookmarked: Boolean!
    }
`;