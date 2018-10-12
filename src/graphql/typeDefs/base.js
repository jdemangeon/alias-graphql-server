import gql from 'graphql-tag';

const Base = gql`
    type Query {
        dummy: Boolean
    }

    enum Locale {
        fr
        de
        en
        es
        pl
        it
    }

    type FullLocale {
        code: String
        label: String
    }
`;

gql.resetCaches();

export default () => [Base];
