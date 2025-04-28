export const apiBaseUrl =
  process.env.NEXT_PUBLIC_API_URL ||
  (typeof window !== 'undefined'
    ? `${window.location.protocol}//${window.location.hostname}:3000`
    : 'http://localhost:3000');
