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