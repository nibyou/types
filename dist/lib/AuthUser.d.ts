export declare type KeycloakConnection = {
    baseUrl: string;
    realm: string;
};
export declare class AuthUser {
    sub: string;
    email: string;
    preferred_username: string;
    userId: string;
    realm_roles: string[];
    realm_access: {
        roles: string[];
    };
    name: string;
    given_name: string;
    family_name: string;
    static isAdmin(user: AuthUser): boolean;
    static hasRole(user: AuthUser, role: string): boolean;
    static verifyToken(token: string, keycloakConnection: KeycloakConnection): Promise<AuthUser | false>;
}
