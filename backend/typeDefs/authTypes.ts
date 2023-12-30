export default `#graphql
    input UserRegisterInput{
        email: String!
        name: String!
        surname: String!
        age: Int!
        password: String!
    }

    input CompanyRegisterInput{
        email: String!
        companyName: String!
        password: String!
    }

    input LoginInput{
        email: String!
        password: String!
    }

    type AuthResult{
        isCompany: Boolean!
    }

    type LoginResult{
        accessToken: String!
        refreshToken: String!
        isCompany: Boolean!
    }

    type RefreshTokenResult{
        accessToken: String!
    }
`;