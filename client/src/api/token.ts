const ACCESS_TOKEN_KEY = 'accessToken';

export const tokenService = {
    getToken(): string | null {
        return localStorage.getItem(ACCESS_TOKEN_KEY);
    },

    setToken(token: string): void {
        localStorage.setItem(ACCESS_TOKEN_KEY, token);
    },

    removeToken(): void {
        localStorage.removeItem(ACCESS_TOKEN_KEY);
    },
};
