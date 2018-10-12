import express from 'express';

import graphqlSchema from './graphql/schema';
import graphqlServer from './graphql/server';
import graphqlClient from './graphql/client';
import apiRouter from './api/router';
import apiVersions from './api/queries';

const app = express();

app.use(`/graphql`, graphqlServer(graphqlSchema));

Object.keys(apiVersions).forEach(version => {
    app.use(
        `/api/${version}`,
        apiRouter(graphqlClient(graphqlSchema), apiVersions[version]),
    );
});

const server = app.listen(8080, () => {
    console.log(`Server is now listening on http://localhost:${8080}...`);
});

export default server;
