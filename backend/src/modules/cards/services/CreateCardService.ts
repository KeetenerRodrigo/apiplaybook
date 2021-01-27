import { inject, injectable } from 'tsyringe';
import { uuid } from 'uuidv4';
import Cards from '@modules/cards/infra/typeorm/entities/Cards';
import ICardsRepository from '@modules/cards/repositories/ICardsRepository';

interface IRequest {
  bin: string;
  issuer: string;
  product: string;
}

@injectable()
class CreateCardService {
  constructor(
    @inject('CardsRepository')
    private cardsRepository: ICardsRepository
  ) { }

  public async execute({ bin, issuer, product }: IRequest): Promise<Cards | undefined> {
    const checkCardExists = await this.cardsRepository.findByBin(bin);

    if (checkCardExists) {
      return;
    }

    const card = await this.cardsRepository.create({
      bin: bin,
      issuer: issuer,
      product: product
    });

    return card;
  }
}

export default CreateCardService;
