import { CreateResource } from '../create.resource';

export class OrderItemCreateResource extends CreateResource {
    productId: string;
    quantity: number;
}
