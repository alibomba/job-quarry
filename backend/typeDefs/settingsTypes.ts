export default `#graphql
    input SocialMediaInput{
        facebook: String
        instagram: String
        linkedin: String
        github: String
    }

    input CompanySettingsInput{
        companyName: String!
        email: String!
        password: String
        website: String!
        logo: String
        socialMedia: SocialMediaInput
        description: String
    }
`;