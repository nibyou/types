"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthUser = void 0;
const axios_1 = require("axios");
const jwt_decode_1 = require("jwt-decode");
class AuthUser {
    static isAdmin(user) {
        return AuthUser.hasRole(user, 'admin');
    }
    static hasRole(user, role) {
        return user.realm_access.roles.includes(role);
    }
    static async verifyToken(token, keycloakConnection) {
        const verified = await axios_1.default.get(`${keycloakConnection.baseUrl}/realms/${keycloakConnection.realm}/protocol/openid-connect/userinfo`, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });
        if (verified.status !== 200)
            return false;
        return (0, jwt_decode_1.default)(token);
    }
}
exports.AuthUser = AuthUser;
//# sourceMappingURL=AuthUser.js.map