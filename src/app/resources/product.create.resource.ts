import { CreateResource } from "./create.resource";

export class ProductCreateResource extends CreateResource {
  description: string;
  companyName: string;
  barcode: string;
  imageUrl: string;
  size: number;
  isWeighable: boolean;
  isInGrams: boolean;
  quantityInterval: number;
  price: number;
  categoryId: string;
  subCategoryId: string;
}
