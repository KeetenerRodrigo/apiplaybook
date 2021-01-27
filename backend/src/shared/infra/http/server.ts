import 'reflect-metadata';
import 'express-async-errors';
import express from 'express';
import cors from 'cors';

import '@shared/infra/typeorm/index';
import '@shared/container/index'

import routes from '@shared/infra/http/routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  console.log('Server started on port 3333!');
});
