import { Brand } from "../brand/brand";

export interface Product {
  id?: number,
  name: string,
  affectedParameter: number,
  brand: Brand
}