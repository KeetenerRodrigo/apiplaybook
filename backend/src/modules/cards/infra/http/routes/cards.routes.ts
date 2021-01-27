import { Router } from 'express';

import CardsController from '@modules/cards/infra/controller/CardsController';

const cardsRouter = Router();

const cardsController = new CardsController();

cardsRouter.post('/', cardsController.create);
cardsRouter.get('/:bin', cardsController.find);

export default cardsRouter;
