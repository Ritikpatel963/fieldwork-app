import { requestJson } from '../../api/http';
import type { Customer } from './types';

// Placeholder endpoints (define these in Laravel when you implement Customers).
export async function listCustomers(): Promise<Customer[]> {
  return requestJson<Customer[]>('/v1/customers');
}

