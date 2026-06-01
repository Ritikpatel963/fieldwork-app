/**
 * Central place to configure API settings.
 *
 * Keep this file dependency-free so it can be imported anywhere.
 */

/**
 * Base URL for the Laravel backend.
 *
 * For Android emulator:
 * - If your backend runs on your PC at http://127.0.0.1:8000,
 *   Android emulator uses: http://10.0.2.2:8000
 *
 * For physical device:
 * - Use your machine LAN IP, e.g. http://192.168.1.10:8000
 */
export const API_BASE_URL = 'http://10.0.2.2:8000';

/** Laravel routes are prefixed with /api */
export const API_PREFIX = '/api';

