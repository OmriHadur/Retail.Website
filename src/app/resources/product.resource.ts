import { Resource } from "./resource";

export class ProductResource extends Resource {
  description: string;
  companyName: string;
  barcode: string;
  imageUrl: string;
  size: number;
  sizeDisplay: string;
  quantityInterval: number;
  isWeighable:boolean;

  price: number;
  categoryName: string;
  subCategoryId: string;
}
