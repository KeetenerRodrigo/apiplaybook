import { container } from 'tsyringe';

import ICardsRepository from '@modules/cards/repositories/ICardsRepository';
import CardsRepository from '@modules/cards/infra/typeorm/repositories/CardsRepository';

import IAllowedCapturesRepository from '@modules/cards/repositories/IAllowedCapturesRepository';
import AllowedCapturesRepository from '@modules/cards/infra/typeorm/repositories/AllowedCapturesRepository';

import IUsagesRepository from '@modules/cards/repositories/IUsagesRepository';
import UsagesRepository from '@modules/cards/infra/typeorm/repositories/UsagesRepository';

container.registerSingleton<ICardsRepository>('CardsRepository', CardsRepository);
container.registerSingleton<IAllowedCapturesRepository>('AllowedCapturesRepository', AllowedCapturesRepository);
container.registerSingleton<IUsagesRepository>('UsagesRepository', UsagesRepository);
