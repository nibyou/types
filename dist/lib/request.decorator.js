"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteRequest = exports.UpdateRequest = exports.ReadRequest = exports.CreateRequest = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const nest_keycloak_connect_1 = require("nest-keycloak-connect");
function generateStandardDecorators(summary, roles) {
    const decorators = [
        (0, swagger_1.ApiOperation)({ summary }),
        (0, swagger_1.ApiBadRequestResponse)({ description: 'Bad Request.' }),
    ];
    if (roles) {
        decorators.push((0, swagger_1.ApiForbiddenResponse)({ description: 'Forbidden.' }));
        decorators.push((0, swagger_1.ApiUnauthorizedResponse)({ description: 'Unauthorized.' }));
        decorators.push((0, nest_keycloak_connect_1.Roles)({ roles: roles }));
    }
    else {
        decorators.push((0, nest_keycloak_connect_1.Public)());
    }
    return decorators;
}
function CreateRequest(options) {
    return (0, common_1.applyDecorators)((0, common_1.Post)(options.path), (0, swagger_1.ApiCreatedResponse)({
        description: options.description,
        type: options.returnType,
    }), ...generateStandardDecorators(options.summary, options.roles));
}
exports.CreateRequest = CreateRequest;
function ReadRequest(options) {
    return (0, common_1.applyDecorators)((0, common_1.Get)(options.path), (0, swagger_1.ApiOkResponse)({
        description: options.description,
        type: options.returnType,
    }), ...generateStandardDecorators(options.summary, options.roles));
}
exports.ReadRequest = ReadRequest;
function UpdateRequest(options) {
    return (0, common_1.applyDecorators)(options.usePatch ? (0, common_1.Patch)(options.path) : (0, common_1.Put)(options.path), (0, swagger_1.ApiOkResponse)({
        description: options.description,
        type: options.returnType,
    }), ...generateStandardDecorators(options.summary, options.roles));
}
exports.UpdateRequest = UpdateRequest;
function DeleteRequest(options) {
    return (0, common_1.applyDecorators)((0, common_1.Delete)(options.path), (0, swagger_1.ApiOkResponse)({
        description: options.description,
        type: options.returnType,
    }), ...generateStandardDecorators(options.summary, options.roles));
}
exports.DeleteRequest = DeleteRequest;
//# sourceMappingURL=request.decorator.js.map