export interface CardsInformationSaveDTO {
    bin: {
        issuer: {
            name: string;
        }

        product: {
            name: string;
        }

        allowedCaptures: [{
            name: string;
            code: Number;
        }]

        usages: [{
            name: string;
            code: number;
        }]
    }
}

export interface CardsInformationDTO {
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