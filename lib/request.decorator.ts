import {
    applyDecorators,
    Delete,
    Get,
    Patch,
    Post,
    Put,
    Type,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiOperation,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { Public, Roles } from 'nest-keycloak-connect';

export type RequestOptions = {
  path?: string;
  summary?: string;
  description?: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  returnType: Type<unknown> | Function | [Function] | string;
  roles: string[] | false;
  operationId?: string;
};

function generateStandardDecorators(summary: string, roles: string[] | false) {
  const decorators = [
    ApiOperation({ summary }),
    ApiBadRequestResponse({ description: 'Bad Request.' }),
    ApiInternalServerErrorResponse({ description: 'Internal Server Error.' }),
  ];

  if (roles) {
    decorators.push(ApiForbiddenResponse({ description: 'Forbidden.' }));
    decorators.push(ApiUnauthorizedResponse({ description: 'Unauthorized.' }));
    decorators.push(Roles({ roles }));
  } else {
    decorators.push(Public());
  }

  return decorators;
}

export type CreateRequestOptions = RequestOptions;

export function CreateRequest(options: CreateRequestOptions) {
  return applyDecorators(
    Post(options.path),
    ApiCreatedResponse({
      description: options.description,
      type: options.returnType,
    }),
    ...generateStandardDecorators(options.summary, options.roles),
  );
}

export type ReadRequestOptions = RequestOptions;

export function ReadRequest(options: ReadRequestOptions) {
  return applyDecorators(
    Get(options.path),
    ApiOkResponse({
      description: options.description,
      type: options.returnType,
    }),
    ...generateStandardDecorators(options.summary, options.roles),
  );
}

export type UpdateRequestOptions = RequestOptions & {
  usePatch?: boolean;
};

export function UpdateRequest(options: UpdateRequestOptions) {
  return applyDecorators(
    options.usePatch ? Patch(options.path) : Put(options.path),
    ApiOkResponse({
      description: options.description,
      type: options.returnType,
    }),
    ...generateStandardDecorators(options.summary, options.roles),
  );
}

export type DeleteRequestOptions = RequestOptions;

export function DeleteRequest(options: DeleteRequestOptions) {
  return applyDecorators(
    Delete(options.path),
    ApiOkResponse({
      description: options.description,
      type: options.returnType,
    }),
    ...generateStandardDecorators(options.summary, options.roles),
  );
}
