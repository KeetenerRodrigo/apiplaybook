import { getRepository, Repository } from 'typeorm';
import IAllowedCapturesRepository from '@modules/cards/repositories/IAllowedCapturesRepository';
import { AllowedCapturesDTO } from '@modules/cards/dtos/CardsInformationDTO';
import AllowedCaptures from '@modules/cards/infra/typeorm/entities/AllowedCaptures';

class AllowedCapturesRepository implements IAllowedCapturesRepository {
  private ormRepository: Repository<AllowedCaptures>

  constructor() {
    this.ormRepository = getRepository(AllowedCaptures);
  }

  public async findByBin(bin: string): Promise<AllowedCaptures[] | undefined> {
    const card = await this.ormRepository.find({
      select: ['name', 'code'],
      where: { bin },
    });

    return card;
  }

  public async create({ bin, name, code }: AllowedCapturesDTO): Promise<AllowedCaptures> {
    const cards = this.ormRepository.create({ bin, code, name });

    await this.ormRepository.save(cards);

    return cards;
  }
}

export default AllowedCapturesRepository;
