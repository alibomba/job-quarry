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

export const REFRESH_TOKEN = gql`
    mutation($refreshToken: String!){
        refreshToken(refreshToken: $refreshToken){
            accessToken
        }
    }
`;