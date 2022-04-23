import { InterventionLevel } from "src/app/components/model/interventionLevel/inteventionLevel";
import { Formula } from "../formula/formula";
import { Product } from "../product/product";

export interface CalculationDto {
  id?: number,
  multiplier: number,
  product: number,
  interventionLevel: number,
  formula: number,
}