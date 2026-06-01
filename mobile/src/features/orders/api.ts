import { requestJson } from '../../api/http';
import type { Order } from './types';

// Placeholder endpoints (define these in Laravel when you implement Orders).
export async function listOrders(): Promise<Order[]> {
  return requestJson<Order[]>('/v1/orders');
}

