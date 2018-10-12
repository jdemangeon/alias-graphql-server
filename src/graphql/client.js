import { graphql } from 'graphql';

export default schema => ({
    request: (...args) => graphql(schema, ...args),
});
