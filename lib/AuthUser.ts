export class AuthUser {
    sub: string;
    email: string;
    preferred_username: string;
    userId: string;
    realm_roles: string[];

    isAdmin(): boolean {
        return this.realm_roles.includes('admin');
    }
}