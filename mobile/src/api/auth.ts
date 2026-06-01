import { requestJson } from './http';
import { clearAuthToken, setAuthToken } from '../auth/tokenStore';

export type LoginResponse = {
  user: {
    id: number;
    name: string;
    email: string;
  };
  token: string;
};

/**
 * Current backend scaffold supports email+password login:
 * POST /api/login { email, password }
 *
 * If you switch to OTP login later, keep this file but change the endpoints.
 */
export async function loginWithEmailPassword(email: string, password: string): Promise<LoginResponse> {
  const res = await requestJson<LoginResponse>('/login', {
    method: 'POST',
    body: { email, password },
  });

  await setAuthToken(res.token);
  return res;
}

export async function fetchMe(): Promise<unknown> {
  return requestJson('/user');
}

export async function logout(): Promise<void> {
  await requestJson('/logout', { method: 'POST' });
  await clearAuthToken();
}

