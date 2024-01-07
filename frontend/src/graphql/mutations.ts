import { gql } from "@apollo/client";

export const USER_REGISTER = gql`
    mutation($userRegisterInput: UserRegisterInput!){
        userRegister(userRegisterInput: $userRegisterInput){
            success
        }
    }
`;

export const COMPANY_REGISTER = gql`
    mutation($companyRegisterInput: CompanyRegisterInput!){
        companyRegister(companyRegisterInput: $companyRegisterInput){
            success
        }
    }
`;

export const LOGIN = gql`
    mutation($loginInput: LoginInput!){
        login(loginInput: $loginInput){
            accessToken
            refreshToken
            isCompany
        }
    }
`;

export const LOGOUT = gql`
    mutation($refreshToken: String!){
        logout(refreshToken: $refreshToken){
            success
        }
    }
`;

export const REFRESH_TOKEN = gql`
    mutation($refreshToken: String!){
        refreshToken(refreshToken: $refreshToken){
            accessToken
        }
    }
`;

export const SET_NOTIFICATIONS_TO_READ = gql`
    mutation{
        setNotificationsToRead{
            success
        }
    }
`;

export const BOOKMARK = gql`
    mutation($bookmarkId: String!){
        bookmark(id: $bookmarkId){
            isBookmarked
        }
    }
`;