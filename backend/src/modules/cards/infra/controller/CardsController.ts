import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateCardService from '@modules/cards/services/CreateCardService';
import CardsRepository from '@modules/cards/infra/typeorm/repositories/CardsRepository';

import CreateAllowedCapturesService from '@modules/cards/services/CreateAllowedCapturesService';
import AllowedCapturesRepository from '@modules/cards/infra/typeorm/repositories/AllowedCapturesRepository';

import CreateUsagesService from '@modules/cards/services/CreateUsagesService';
import UsagesRepository from '@modules/cards/infra/typeorm/repositories/UsagesRepository';
import ReturnCards from '@modules/cards/fakes/class/ReturnCards';

export default class CardsController {

  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const { bin, issuer, product } = request.body;
      const usages = request.body.usages;
      const allowed_captures = request.body.allowed_captures;

      const createCard = container.resolve(CreateCardService);
      const creatUsage = container.resolve(CreateUsagesService);
      const creatAllowedCaptures = container.resolve(CreateAllowedCapturesService);

      const card = await createCard.execute({
        bin,
        issuer,
        product
      });

      await creatUsage.execute(bin, usages);

      await creatAllowedCaptures.execute(bin, allowed_captures);

      return response.json(card);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }

  public async find(request: Request, response: Response): Promise<Response> {
    const { bin } = request.params;

    const card = await container.resolve(CardsRepository).findByBin(bin);
    const usages = await container.resolve(UsagesRepository).findByBin(bin);
    const allowed_captures = await container.resolve(AllowedCapturesRepository).findByBin(bin);

    const returnCards = new ReturnCards();

    returnCards.card = card;
    returnCards.usages = usages;
    returnCards.allowed_captures = allowed_captures;

    return response.json(returnCards);
  }
}
