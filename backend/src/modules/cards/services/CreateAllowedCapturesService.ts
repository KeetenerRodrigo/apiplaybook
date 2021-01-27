import { inject, injectable } from 'tsyringe';
import IAllowedCapturesRepository from '@modules/cards/repositories/IAllowedCapturesRepository';

import AllowedCaptures from '../infra/typeorm/entities/AllowedCaptures';

interface IRequest {
  name: string;
  code: number;
}

@injectable()
class CreateAllowedCapturesService {
  constructor(
    @inject('AllowedCapturesRepository')
    private allowedCapturesRepository: IAllowedCapturesRepository
  ) { }

  public async execute(bin: string, data: IRequest[]): Promise<AllowedCaptures | undefined> {
    const checkAllowedCapturesExists = await this.allowedCapturesRepository.findByBin(bin);

    if (checkAllowedCapturesExists?.length !== 0){
      return;
    }

    data.map(allowedCapture => {
      this.allowedCapturesRepository.create({
        bin,
        name: allowedCapture.name,
        code: allowedCapture.code
      });
    })

    return;
  }
}

export default CreateAllowedCapturesService;
