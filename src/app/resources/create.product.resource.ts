import { CategoryResource } from "./category.resource";
import { CreateResource } from "./create.resource";

export class ProductCreateResource extends CreateResource {
  description: string;
  companyName: string;
  barcode: string;
  imageUrl: string;
  size: number;
  price: number;
  CategoryId: string;
}
