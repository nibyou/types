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
exports.OnboardingTokenSchema = exports.OnboardingToken = void 0;
const swagger_1 = require("@nestjs/swagger");
const mongoose_1 = require("@nestjs/mongoose");
const GlobalStatus_1 = require("../GlobalStatus");
const AccountType_1 = require("../AccountType");
let OnboardingToken = class OnboardingToken {
};
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], OnboardingToken.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: () => GlobalStatus_1.GlobalStatus, default: GlobalStatus_1.GlobalStatus.ACTIVE }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], OnboardingToken.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], OnboardingToken.prototype, "validUntil", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: () => AccountType_1.AccountType }),
    (0, swagger_1.ApiProperty)({
        enum: AccountType_1.AccountType,
    }),
    __metadata("design:type", String)
], OnboardingToken.prototype, "accountType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        format: 'uuid',
    }),
    __metadata("design:type", String)
], OnboardingToken.prototype, "_id", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], OnboardingToken.prototype, "createdAt", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], OnboardingToken.prototype, "updatedAt", void 0);
OnboardingToken = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], OnboardingToken);
exports.OnboardingToken = OnboardingToken;
exports.OnboardingTokenSchema = mongoose_1.SchemaFactory.createForClass(OnboardingToken);
//# sourceMappingURL=OnboardingToken.schema.js.map