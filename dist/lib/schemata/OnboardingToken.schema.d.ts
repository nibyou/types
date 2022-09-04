/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Document } from 'mongoose';
import { GlobalStatus } from '../GlobalStatus';
import { AccountType } from '../AccountType';
export declare type OnboardingTokenDocument = OnboardingToken & Document;
export declare class OnboardingToken {
    email: string;
    status: GlobalStatus;
    validUntil: Date;
    accountType: AccountType;
    _id: string;
    createdAt: Date;
    updatedAt: Date;
}
export declare const OnboardingTokenSchema: import("mongoose").Schema<OnboardingToken, import("mongoose").Model<OnboardingToken, any, any, any, any>, {}, {}, {}, {}, "type", OnboardingToken>;
