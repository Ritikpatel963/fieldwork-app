/**
 * Minimal token storage.
 *
 * This is intentionally dependency-free so the project compiles immediately.
 * Later you should persist it with one of:
 * - expo-secure-store (recommended for auth tokens)
 * - @react-native-async-storage/async-storage
 */

let memoryToken: string | null = null;

export async function getAuthToken(): Promise<string | null> {
  return memoryToken;
}

export async function setAuthToken(token: string): Promise<void> {
  memoryToken = token;
}

export async function clearAuthToken(): Promise<void> {
  memoryToken = null;
}

