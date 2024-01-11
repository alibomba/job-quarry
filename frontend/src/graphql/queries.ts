import { gql } from "@apollo/client";

export const GET_AUTH = gql`
    query{
        getAuth{
            isCompany
        }
    }
`;

export const GET_MY_NOTIFICATIONS = gql`
    query{
        getMyNotifications{
            _id
            image
            message
            redirect
            seen
        }
    }
`;

export const LOCATION_AUTOCOMPLETE = gql`
    query($phrase: String!){
        locationAutocomplete(phrase: $phrase)
    }
`;

export const GET_TECHNOLOGIES = gql`
    query{
        getTechnologies
    }
`;

export const OFFER_SEARCH = gql`
    query($searchInput: OfferSearchInput!){
        search(searchInput: $searchInput){
            currentPage
            lastPage
            data{
                _id
                title
                company{
                    companyName
                    logo
                }
                mode
                location
                requiredTechnologies
                salary
            }
        }
    }
`;

export const IS_BOOKMARKED = gql`
    query($isBookmarkedId: String!){
        isBookmarked(id: $isBookmarkedId){
            success
        }
    }
`;

export const GET_OFFER = gql`
    query($getOfferId: String!){
        getOffer(id: $getOfferId){
            _id
            title
            company{
                _id
                companyName
                logo
            }
            mode
            location
            level
            expiresAt
            contractType
            salary
            requiredTechnologies
            optionalTechnologies
            description
            tasks
            required
            optional
            benefits
            recruitmentStages
        }
    }
`;

export const GET_USER_PROFILE = gql`
    query($getUserId: String!){
        getUser(id: $getUserId){
            _id
            profilePicture
            name
            surname
            age
            email
            skills
            socialMedia{
                facebook
                instagram
                linkedin
                github
            }
            description
            portfolio
            experience{
                title
                company
                startDate
                endDate
                description
            }
        }
    }
`;

export const GET_COMPANY_PROFILE = gql`
    query($getCompanyId: String!){
        getCompany(id: $getCompanyId){
            _id
            logo
            companyName
            socialMedia{
                facebook
                instagram
                linkedin
                github
            }
            description
            website
            offers{
                _id
                title
                mode
                location
                requiredTechnologies
                salary
            }
        }
    }
`;

export const GET_MY_OFFERS = gql`
    query{
        myOffers{
            _id
            title
            salary
            level
            contractType
            expiresAt
        }
    }
`;