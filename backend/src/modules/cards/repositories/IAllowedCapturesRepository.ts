import AllowedCaptures from '@modules/cards/infra/typeorm/entities/AllowedCaptures';
import { AllowedCapturesDTO } from '../dtos/CardsInformationDTO';

export default interface IAllowedCapturesRepository {
  findByBin(bin: string): Promise<AllowedCaptures[] | undefined>;
  create(data: AllowedCapturesDTO): Promise<AllowedCaptures | undefined>;
}
