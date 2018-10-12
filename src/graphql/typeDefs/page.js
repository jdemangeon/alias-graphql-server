import gql from 'graphql-tag';
import Base from './base';

const Page = gql`
    extend type Query {
        """
        Return Page
        """
        Page(id: String!): Page
    }

    type Page {
        """
        Unique page identifier
        """
        id: String!

        """
        Page title
        """
        title: String!

        """
        Page title (new version)
        """
        newTitle: Int!

        """
        Page subtitle
        """
        subtitle: String!

        """
        Page Locale
        """
        locale: Locale!

        """
        Page locale (eg: fr_FR)
        """
        isoLocale: String!

        """
        Page locale (full format)
        """
        fullLocale: FullLocale!
    }
`;

gql.resetCaches();

export default () => [Page, Base];
