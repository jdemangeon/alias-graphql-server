import graphqlHttp from 'express-graphql';

export default schema => graphqlHttp({
    schema,
    graphiql: true,
});
