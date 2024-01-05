export default `#graphql
    scalar DateTime

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

    type OfferPaginationResponse{
        currentPage: Int!
        lastPage: Int!
        data: [Offer!]!
    }

    enum Level{
        JUNIOR
        MID
        SENIOR
    }

    enum ContractType{
        TYMCZASOWA
        UMOWA_O_PRACE
        UMOWA_O_DZIELO
        UMOWA_ZLECENIE
        PRAKTYKI_ZAWODOWE
        B2B
        STAZ
    }

    enum WorkMode{
        STACJONARNIE
        ZDALNIE
        HYBRYDOWO
    }

    input OfferSearchInput{
        phrase: String
        city: String
        level: Level
        contractType: ContractType
        mode: WorkMode
        technologies: [String!]
        salaryFrom: Int
        salaryTo: Int
        page: Int!
    }
`;