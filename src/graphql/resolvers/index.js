import {
    query as pageQuery,
    resolver as pageResolver,
} from './page';

export default {
    ...pageResolver,
    Query: {
        ...pageQuery
    }
};
