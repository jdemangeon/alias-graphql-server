export const query = {
    Page: (_, { id }) => ({ id }),
};

export const resolver = {
    Page: {
        title: () => 'v1 title',
        newTitle: () => 2,
        subtitle: () => 'v1 subtitle',
        locale: () => 'fr',
        isoLocale: () => 'fr_FR',
        fullLocale: () => ({
            code: 'fr',
            label: 'french',
        }),
    }
};

