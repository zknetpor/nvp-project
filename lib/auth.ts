// Authentication utility functions

export const login = (username: string, password: string) => {
    // Logic for user login
};

export const logout = () => {
    // Logic for user logout
};

export const isAuthenticated = (): boolean => {
    // Logic to check if user is authenticated
    return !!localStorage.getItem('token');
};

export const register = (username: string, password: string) => {
    // Logic for user registration
};
