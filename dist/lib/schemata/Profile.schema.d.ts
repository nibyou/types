import mongoose, { Document } from 'mongoose';
import { GlobalStatus } from '../GlobalStatus';
import { Address } from '../Address';
import { User } from './User.schema';
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
    user: User;
    _id: string;
    createdAt: Date;
    updatedAt: Date;
}
export declare const ProfileSchema: mongoose.Schema<Profile, mongoose.Model<Profile, any, any, any, any>, {}, {}, {}, {}, "type", Profile>;
