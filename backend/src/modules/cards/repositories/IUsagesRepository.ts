import Usages from '@modules/cards/infra/typeorm/entities/Usages';
import { UsagesInformationDTO } from '../dtos/CardsInformationDTO';

export default interface IUsagesRepository {
  findByBin(bin: string): Promise<Usages[] | undefined>;
  create(data: UsagesInformationDTO): Promise<Usages | undefined>;
}
