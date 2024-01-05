export default `#graphql
    scalar DateTime
    union UserOrCompany = User | Company

    type Notification{
        _id: String!
        image: String!
        message: String!
        redirect: String!
        recipient: UserOrCompany!
        seen: Boolean!
        createdAt: DateTime!
    }
`;