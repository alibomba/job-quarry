export default `#graphql
    scalar DateTime

    type Application{
        _id: String!
        name: String!
        surname: String!
        email: String!
        phoneNumber: String!
        CV: String!
        details: String
        user: User
        offer: Offer!
        status: String!
        sentAt: DateTime!
    }

    input ApplicationInput{
        offerId: String!
        name: String!
        surname: String!
        email: String!
        phoneNumber: String!
        cvUrl: String!
        details: String
    }
`;