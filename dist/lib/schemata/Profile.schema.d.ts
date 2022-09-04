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
export declare type ProfileDocument = Profile & Document;
export declare class PersonalData {
    salutation: string;
    title: string;
    firstName: string;
    lastName: string;
    birthDate: Date;
    sex: string;
    gender: string;
    healthInsuranceNumber: string;
    healthInsuranceInstitute: string;
}
export declare class Profile {
    acceptedTerms: boolean;
    personalData: PersonalData;
    address: Address;
    status: GlobalStatus;
    profileImage: string;
    _id: string;
    createdAt: Date;
    updatedAt: Date;
}
export declare const ProfileSchema: import("mongoose").Schema<Profile, import("mongoose").Model<Profile, any, any, any, any>, {}, {}, {}, {}, "type", Profile>;
