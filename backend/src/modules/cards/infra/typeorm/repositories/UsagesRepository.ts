import { getRepository, Repository } from 'typeorm';
import IUsagesRepository from '@modules/cards/repositories/IUsagesRepository';
import { UsagesInformationDTO } from '@modules/cards/dtos/CardsInformationDTO';
import Usages from '@modules/cards/infra/typeorm/entities/Usages';

class UsagesRepository implements IUsagesRepository {
  private ormRepository: Repository<Usages>

  constructor() {
    this.ormRepository = getRepository(Usages);
  }

  public async findByBin(bin: string): Promise<Usages[] | undefined> {
    const card = await this.ormRepository.find({
      select: ['name', 'code'],
      where: { bin },
    });
    
    return card;
  }


  public async create({ bin, name, code }: UsagesInformationDTO): Promise<Usages> {
    const cards = this.ormRepository.create({ bin, name, code });

    await this.ormRepository.save(cards);

    return cards;
  }
}

export default UsagesRepository;
