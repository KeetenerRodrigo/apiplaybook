import { AllowedCapturesDTO } from "./AllowedCapturesDTO";
import { UsagesInformationDTO } from "./UsagesDTO";

export interface ReturnInformationDTO {
    bin: string;
    issuer: string;
    product: string;
    usages: UsagesInformationDTO[];
    allowed_captures: AllowedCapturesDTO[];
}