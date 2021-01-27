import Cards from '@modules/cards/infra/typeorm/entities/Cards';
import { CardsInformationDTO } from '../dtos/CardsInformationDTO';

export default interface ICardsRepository {
  findByBin(bin: string): Promise<Cards | undefined>;
  create(data: CardsInformationDTO): Promise<Cards | undefined>;
}
