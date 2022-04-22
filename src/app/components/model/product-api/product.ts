import { Brand } from "../../views/admin/brand/brand";

export interface Product {
  id?: number;
  name: string;
  affectedParameter: number;
  brandId: Brand;
  brandName: string;
}