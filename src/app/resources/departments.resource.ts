import { Resource } from "./resource";
import { CategoryFamily } from './category.family';

export class DepartmentResource extends Resource {
  name: string;
  families : CategoryFamily[]
}
