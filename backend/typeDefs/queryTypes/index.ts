import authQueries from "./authQueries";

export default `#graphql
    type Query{
        ${authQueries}
        
    }
`;