export declare class AuthUser {
    sub: string;
    email: string;
    preferred_username: string;
    userId: string;
    realm_roles: string[];
    realm_access: {
        roles: string[];
    };
    static isAdmin(user: AuthUser): boolean;
    static hasRole(user: AuthUser, role: string): boolean;
}
