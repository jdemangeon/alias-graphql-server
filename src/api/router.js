import { Router } from 'express';

const apiRouter = (graphqlClient, queries) => {
    const router = Router({ mergeParams: true });

    router.get('/:query', async (req, res, next) => {
        const { query } = req.params;
        const { data, ...r } = await graphqlClient.request(queries[query]);
console.log(r)
        if (!data) {
            return res.status(404).end('Not Found.');
        }

        return res.json(data);
    });

    return router;
};

export default apiRouter;
