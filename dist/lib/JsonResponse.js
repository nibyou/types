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
exports.JsonResponse = void 0;
const swagger_1 = require("@nestjs/swagger");
class JsonResponse {
    constructor() {
        this.ts = new Date().toISOString();
    }
    setMessage(message) {
        this.message = message;
        return this;
    }
    setError(error) {
        this.error = {
            message: error.message,
        };
        return this;
    }
    setData(data) {
        this.data = data;
        return this;
    }
}
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Data from the API response, can be of any type',
    }),
    __metadata("design:type", Object)
], JsonResponse.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Message from the API, likely a status',
    }),
    __metadata("design:type", String)
], JsonResponse.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Error, if thrown',
    }),
    __metadata("design:type", Object)
], JsonResponse.prototype, "error", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        description: 'Timestamp of the start of the response',
    }),
    __metadata("design:type", String)
], JsonResponse.prototype, "ts", void 0);
exports.JsonResponse = JsonResponse;
//# sourceMappingURL=JsonResponse.js.map