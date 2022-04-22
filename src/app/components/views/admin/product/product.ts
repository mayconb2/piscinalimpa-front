import { Brand } from "../brand/brand";

export interface Product {
  id?: number;
  name: string;
  affectedParameter: number;
  brandId: Brand;
  brandName: string;
}