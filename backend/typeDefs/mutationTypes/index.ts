import authMutations from "./authMutations";

export default `#graphql
    type Mutation{
        ${authMutations}

    }
`;