import { getRepository, Repository } from 'typeorm';
import ICardsRepository from '@modules/cards/repositories/ICardsRepository';
import { CardsInformationDTO } from '@modules/cards/dtos/CardsInformationDTO';
import Cards from '@modules/cards/infra/typeorm/entities/Cards';

class CardsRepository implements ICardsRepository {
  private ormRepository: Repository<Cards>

  constructor() {
    this.ormRepository = getRepository(Cards);
  }

  public async findByBin(bin: string): Promise<Cards | undefined> {
    const card = await this.ormRepository.findOne({
      select: ['issuer', 'product'],
      where: { bin },
    });

    return card;
  }


  public async create({ bin, issuer, product }: CardsInformationDTO): Promise<Cards> {
    const cards = this.ormRepository.create({ bin, issuer, product });

    await this.ormRepository.save(cards);

    return cards;
  }

  public async save(card: Cards): Promise<Cards> {
    return this.ormRepository.save(card);
  };
}

export default CardsRepository;
