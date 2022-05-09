"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthUser = void 0;
class AuthUser {
    isAdmin() {
        return this.realm_roles.includes('admin');
    }
}
exports.AuthUser = AuthUser;
//# sourceMappingURL=AuthUser.js.map