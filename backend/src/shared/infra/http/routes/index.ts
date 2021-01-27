import { Router } from 'express';

import userRouter from '@modules/cards/infra/http/routes/cards.routes';

const routes = Router();

routes.use('/cards', userRouter);

export default routes;
