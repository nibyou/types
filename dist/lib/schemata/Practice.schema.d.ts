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
import { Address } from '../Address';
export declare type PracticeDocument = Practice & Document;
export declare class Practice {
    address: Address;
    name: string;
    email: string;
    mobileNumber?: string;
    website?: string;
    status: GlobalStatus;
    logo: string;
    admins?: string[];
    _id: string;
    createdAt: Date;
    updatedAt: Date;
}
export declare const PracticeSchema: import("mongoose").Schema<Practice, import("mongoose").Model<Practice, any, any, any, any>, {}, {}, {}, {}, "type", Practice>;