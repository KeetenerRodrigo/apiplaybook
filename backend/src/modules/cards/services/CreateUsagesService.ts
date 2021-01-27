import { inject, injectable } from 'tsyringe';
import IUsagesRepository from '@modules/cards/repositories/IUsagesRepository';

import Usages from '../infra/typeorm/entities/Usages';

interface IRequest {
  name: string;
  code: number;
}

@injectable()
class CreateCardService {
  constructor(
    @inject('UsagesRepository')
    private usagesRepository: IUsagesRepository
  ) { }

  public async execute(bin: string, data: IRequest[]): Promise<Usages | undefined> {
    const checkUsagesExists = await this.usagesRepository.findByBin(bin);

    if (checkUsagesExists?.length !== 0) { 
      console.log(checkUsagesExists)
      return;
    }

    data.map(usage => {
      this.usagesRepository.create({
        bin,
        name: usage.name,
        code: usage.code
      });
    })

    return;
  }
}

export default CreateCardService;
