"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = exports.User = exports.CryptoData = exports.SymmetricKey = exports.PrivateKey = void 0;
const swagger_1 = require("@nestjs/swagger");
const mongoose_1 = require("@nestjs/mongoose");
const GlobalStatus_1 = require("../GlobalStatus");
const mongoose = require("mongoose");
class PrivateKey {
}
__decorate([
    (0, mongoose_1.Prop)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], PrivateKey.prototype, "encWithPassword", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], PrivateKey.prototype, "encWithRecovery", void 0);
exports.PrivateKey = PrivateKey;
class SymmetricKey {
}
__decorate([
    (0, mongoose_1.Prop)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], SymmetricKey.prototype, "encWithPublicKey", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        format: 'uuid',
    }),
    __metadata("design:type", String)
], SymmetricKey.prototype, "keyId", void 0);
exports.SymmetricKey = SymmetricKey;
class CryptoData {
}
__decorate([
    (0, mongoose_1.Prop)({ type: () => PrivateKey }),
    (0, swagger_1.ApiProperty)({ type: PrivateKey }),
    __metadata("design:type", PrivateKey)
], CryptoData.prototype, "privateKey", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: () => [SymmetricKey], default: [] }),
    (0, swagger_1.ApiPropertyOptional)({ type: [SymmetricKey] }),
    __metadata("design:type", Array)
], CryptoData.prototype, "symKeys", void 0);
exports.CryptoData = CryptoData;
let User = class User {
};
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], User.prototype, "firstName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], User.prototype, "lastName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: () => GlobalStatus_1.GlobalStatus, default: GlobalStatus_1.GlobalStatus.PENDING }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], User.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], User.prototype, "keycloakId", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", CryptoData)
], User.prototype, "cryptoData", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Profile' }], default: [] }),
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Array)
], User.prototype, "profiles", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Practitioner' }], default: [] }),
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Array)
], User.prototype, "practitioners", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        format: 'uuid',
    }),
    __metadata("design:type", String)
], User.prototype, "_id", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], User.prototype, "createdAt", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], User.prototype, "updatedAt", void 0);
User = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], User);
exports.User = User;
exports.UserSchema = mongoose_1.SchemaFactory.createForClass(User);
//# sourceMappingURL=User.schema.js.map