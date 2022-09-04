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
exports.ProfileSchema = exports.Profile = exports.PersonalData = void 0;
const swagger_1 = require("@nestjs/swagger");
const mongoose_1 = require("@nestjs/mongoose");
const GlobalStatus_1 = require("../GlobalStatus");
const Address_1 = require("../Address");
class PersonalData {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], PersonalData.prototype, "salutation", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], PersonalData.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], PersonalData.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], PersonalData.prototype, "lastName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], PersonalData.prototype, "birthDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], PersonalData.prototype, "sex", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], PersonalData.prototype, "gender", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], PersonalData.prototype, "healthInsuranceNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], PersonalData.prototype, "healthInsuranceInstitute", void 0);
exports.PersonalData = PersonalData;
let Profile = class Profile {
};
__decorate([
    (0, mongoose_1.Prop)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], Profile.prototype, "acceptedTerms", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: () => PersonalData }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", PersonalData)
], Profile.prototype, "personalData", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: () => Address_1.Address }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Address_1.Address)
], Profile.prototype, "address", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: () => GlobalStatus_1.GlobalStatus, default: GlobalStatus_1.GlobalStatus.ACTIVE }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Profile.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Profile.prototype, "profileImage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        format: 'uuid',
    }),
    __metadata("design:type", String)
], Profile.prototype, "_id", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], Profile.prototype, "createdAt", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], Profile.prototype, "updatedAt", void 0);
Profile = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Profile);
exports.Profile = Profile;
exports.ProfileSchema = mongoose_1.SchemaFactory.createForClass(Profile);
//# sourceMappingURL=Profile.schema.js.map