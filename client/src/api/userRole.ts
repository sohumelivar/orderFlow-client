const USER_ROLE = 'userRole';

export const userRole = {
    getUserRole(): string | null {
        return localStorage.getItem(USER_ROLE);
    },
    
    setUserRole(role: string): void {
        localStorage.setItem(USER_ROLE, role);
    },

    removeRole(): void {
        localStorage.removeItem(USER_ROLE);
    },
};
