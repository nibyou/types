import { Type } from '@nestjs/common';
export declare type RequestOptions = {
    path?: string;
    summary?: string;
    description?: string;
    returnType: Type<unknown> | Function | [Function] | string;
    roles: string[] | false;
    operationId?: string;
};
export declare type CreateRequestOptions = RequestOptions;
export declare function CreateRequest(options: CreateRequestOptions): <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;
export declare type ReadRequestOptions = RequestOptions;
export declare function ReadRequest(options: ReadRequestOptions): <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;
export declare type UpdateRequestOptions = RequestOptions & {
    usePatch?: boolean;
};
export declare function UpdateRequest(options: UpdateRequestOptions): <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;
export declare type DeleteRequestOptions = RequestOptions;
export declare function DeleteRequest(options: DeleteRequestOptions): <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;
