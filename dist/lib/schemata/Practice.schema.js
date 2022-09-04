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
exports.PracticeSchema = exports.Practice = void 0;
const swagger_1 = require("@nestjs/swagger");
const mongoose_1 = require("@nestjs/mongoose");
const GlobalStatus_1 = require("../GlobalStatus");
const Address_1 = require("../Address");
let Practice = class Practice {
};
__decorate([
    (0, mongoose_1.Prop)({ type: () => Address_1.Address }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Address_1.Address)
], Practice.prototype, "address", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Practice.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Practice.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)({ nullable: true }),
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], Practice.prototype, "mobileNumber", void 0);
__decorate([
    (0, mongoose_1.Prop)({ nullable: true }),
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], Practice.prototype, "website", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: () => GlobalStatus_1.GlobalStatus, default: GlobalStatus_1.GlobalStatus.ACTIVE }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Practice.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Practice.prototype, "logo", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: () => [String] }),
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Array)
], Practice.prototype, "admins", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        format: 'uuid',
    }),
    __metadata("design:type", String)
], Practice.prototype, "_id", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], Practice.prototype, "createdAt", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], Practice.prototype, "updatedAt", void 0);
Practice = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Practice);
exports.Practice = Practice;
exports.PracticeSchema = mongoose_1.SchemaFactory.createForClass(Practice);
//# sourceMappingURL=Practice.schema.js.map