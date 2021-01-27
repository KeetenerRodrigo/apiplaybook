export default class ReturnCards {

    card?: {
      issuer: string;
      product: string;
    }
  
    usages?: Array<{
      name: string;
      code: number;
    }>
  
    allowed_captures?: Array<{
      name: string;
      code: number;
    }>
  
  }