import axios from "axios";
import decode from "jwt-decode"

export type KeycloakConnection = {
    baseUrl: string;
    realm: string;
}

export class AuthUser {
    sub: string;
    email: string;
    preferred_username: string;
    userId: string;
    realm_roles: string[];
    realm_access: {roles: string[]};
    name: string;
    given_name: string;
    family_name: string;

    static isAdmin(user: AuthUser): boolean {
        return AuthUser.hasRole(user, 'admin');
    }

    static hasRole(user: AuthUser, role: string): boolean {
        return user.realm_access.roles.includes(role);
    }

    static async verifyToken(token: string, keycloakConnection: KeycloakConnection): Promise<AuthUser | false> {
        const verified = await axios.get(
            `${keycloakConnection.baseUrl}/realms/${keycloakConnection.realm}/protocol/openid-connect/userinfo`, {
            headers: {
                Authorization: 'Bearer ' + token
              }
        });

        if (verified.status === 200) return false;

        return decode(token) as AuthUser;
    }
}