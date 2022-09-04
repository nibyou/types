import { Document } from 'mongoose';
import { GlobalStatus } from '../GlobalStatus';
import { Practice } from './Practice.schema';
import * as mongoose from 'mongoose';
export declare type PractitionerDocument = Practitioner & Document;
export declare enum QualificationName {
    DIETICIAN = "DIETICIAN",
    DIPLOMA_ECOTROPHOLOGIST = "DIPLOMA_ECOTROPHOLOGIST",
    NUTRICIONIST = "NUTRICIONIST",
    DIPLOMA_MEDICAL_EDUCATOR = "DIPLOMA_MEDICAL_EDUCATOR",
    PHYSIOTHERAPIST = "PHYSIOTHERAPIST",
    PSYCHOTHERAPIST = "PSYCHOTHERAPIST",
    DIETCOOK = "DIETCOOK",
    NUTRICINAL_SCIENTIST = "NUTRICINAL_SCIENTIST"
}
export declare const QualificationNameArray: QualificationName[];
export declare class Qualification {
    name: QualificationName;
    url: string;
}
export declare class PractitionerData {
    salutation: string;
    title: string;
    firstName: string;
    lastName: string;
    careerPath: Qualification[];
}
export declare class Practitioner {
    acceptedTerms: boolean;
    practitionerData: PractitionerData;
    status: GlobalStatus;
    practices: Practice[];
    profileImage: string;
    _id: string;
    createdAt: Date;
    updatedAt: Date;
}
export declare const PractitionerSchema: mongoose.Schema<Practitioner, mongoose.Model<Practitioner, any, any, any, any>, {}, {}, {}, {}, "type", Practitioner>;
