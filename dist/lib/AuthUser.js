"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthUser = void 0;
class AuthUser {
    static isAdmin(user) {
        return user.realm_access.roles.includes('admin');
    }
}
exports.AuthUser = AuthUser;
//# sourceMappingURL=AuthUser.js.map