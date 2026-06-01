import { requestJson } from '../../api/http';
import type { Visit } from './types';

// Placeholder endpoints (define these in Laravel when you implement Visits).
export async function listVisits(): Promise<Visit[]> {
  return requestJson<Visit[]>('/v1/visits');
}

