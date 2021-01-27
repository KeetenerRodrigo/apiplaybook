export interface CardsInformationDTO {
    bin: string;
    issuer: string;
    product: string;
}

export interface AllowedCapturesDTO {
    bin: string;
    name?: string;
    code?: number;
}

export interface UsagesInformationDTO {
    bin: string;
    name?: string;
    code?: number;
}

