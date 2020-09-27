import { CreateResource } from '../create.resource';

export class CartItemCreateResource extends CreateResource {
    productId: string;
    quantity: number;
}
