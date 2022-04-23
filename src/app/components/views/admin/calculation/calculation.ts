import { InterventionLevel } from "src/app/components/model/interventionLevel/inteventionLevel";
import { Formula } from "../formula/formula";
import { Product } from "../product/product";

export interface Calculation {
  id?: number,
  multiplier: number,
  // product: Product,
  // interventionLevel: InterventionLevel,
  // formula: Formula,
}