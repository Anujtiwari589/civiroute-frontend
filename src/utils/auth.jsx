// src/utils/auth.js

const AUTH_KEY = "civic_auth";

/**
 * Save auth data (token + role)
 */
export const setAuth = ({ token, role }) => {
  localStorage.setItem(
    AUTH_KEY,
    JSON.stringify({ token, role })
  );
};

/**
 * Get auth data
 */
export const getAuth = () => {
  const data = localStorage.getItem(AUTH_KEY);
  return data ? JSON.parse(data) : null;
};

/**
 * Get token only
 */
export const getToken = () => {
  const auth = getAuth();
  return auth?.token || null;
};

/**
 * Get role only
 */
export const getRole = () => {
  const auth = getAuth();
  return auth?.role || null;
};

/**
 * Check auth
 */
export const isAuthenticated = () => {
  return !!getToken();
};

/**
 * Logout user
 */
export const logout = () => {
  localStorage.removeItem(AUTH_KEY);
};