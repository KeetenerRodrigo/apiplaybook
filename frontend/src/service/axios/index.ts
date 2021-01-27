import axios from 'axios';
import { CardsInformationSaveDTO } from '../../dtos/CardsInformationDTO';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

export async function saveDate(data: CardsInformationSaveDTO, bin: string) {
  
  await api.post('/cards', {
    bin: bin,
    issuer: data.bin.issuer.name,
    product: data.bin.product.name,
    allowed_captures: data.bin.allowedCaptures,
    usages: data.bin.usages
  });
}

export default api;