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
exports.PractitionerSchema = exports.Practitioner = exports.PractitionerData = exports.Qualification = exports.QualificationNameArray = exports.QualificationName = void 0;
const swagger_1 = require("@nestjs/swagger");
const mongoose_1 = require("@nestjs/mongoose");
const GlobalStatus_1 = require("../GlobalStatus");
const mongoose = require("mongoose");
var QualificationName;
(function (QualificationName) {
    QualificationName["DIETICIAN"] = "DIETICIAN";
    QualificationName["DIPLOMA_ECOTROPHOLOGIST"] = "DIPLOMA_ECOTROPHOLOGIST";
    QualificationName["NUTRICIONIST"] = "NUTRICIONIST";
    QualificationName["DIPLOMA_MEDICAL_EDUCATOR"] = "DIPLOMA_MEDICAL_EDUCATOR";
    QualificationName["PHYSIOTHERAPIST"] = "PHYSIOTHERAPIST";
    QualificationName["PSYCHOTHERAPIST"] = "PSYCHOTHERAPIST";
    QualificationName["DIETCOOK"] = "DIETCOOK";
    QualificationName["NUTRICINAL_SCIENTIST"] = "NUTRICINAL_SCIENTIST";
})(QualificationName = exports.QualificationName || (exports.QualificationName = {}));
exports.QualificationNameArray = Object.values(QualificationName);
class Qualification {
}
__decorate([
    (0, swagger_1.ApiProperty)({ enum: exports.QualificationNameArray }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Qualification.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Qualification.prototype, "url", void 0);
exports.Qualification = Qualification;
class PractitionerData {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], PractitionerData.prototype, "salutation", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], PractitionerData.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], PractitionerData.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], PractitionerData.prototype, "lastName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ type: () => [Qualification] }),
    __metadata("design:type", Array)
], PractitionerData.prototype, "careerPath", void 0);
exports.PractitionerData = PractitionerData;
let Practitioner = class Practitioner {
};
__decorate([
    (0, mongoose_1.Prop)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], Practitioner.prototype, "acceptedTerms", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: () => PractitionerData }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", PractitionerData)
], Practitioner.prototype, "practitionerData", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: () => GlobalStatus_1.GlobalStatus, default: GlobalStatus_1.GlobalStatus.ACTIVE }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Practitioner.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Practice' }] }),
    __metadata("design:type", Array)
], Practitioner.prototype, "practices", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Practitioner.prototype, "profileImage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        format: 'uuid',
    }),
    __metadata("design:type", String)
], Practitioner.prototype, "_id", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], Practitioner.prototype, "createdAt", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], Practitioner.prototype, "updatedAt", void 0);
Practitioner = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Practitioner);
exports.Practitioner = Practitioner;
exports.PractitionerSchema = mongoose_1.SchemaFactory.createForClass(Practitioner);
//# sourceMappingURL=Practitioner.schema.js.map