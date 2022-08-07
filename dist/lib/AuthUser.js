"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthUser = void 0;
class AuthUser {
    static isAdmin(user) {
        return AuthUser.hasRole(user, 'admin');
    }
    static hasRole(user, role) {
        return user.realm_access.roles.includes(role);
    }
}
exports.AuthUser = AuthUser;
//# sourceMappingURL=AuthUser.js.map