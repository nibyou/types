import { Document } from 'mongoose';
import { GlobalStatus } from '../GlobalStatus';
import * as mongoose from 'mongoose';
import { Practitioner } from './Practitioner.schema';
import { Profile } from './Profile.schema';
export declare type UserDocument = User & Document;
export declare class PrivateKey {
    encWithPassword: string;
    encWithRecovery: string;
}
export declare class SymmetricKey {
    encWithPublicKey: string;
    keyId: string;
}
export declare class CryptoData {
    privateKey: PrivateKey;
    symKeys: SymmetricKey[];
}
export declare class User {
    email: string;
    firstName: string;
    lastName: string;
    status: GlobalStatus;
    keycloakId: string;
    cryptoData: CryptoData;
    profiles?: Profile[];
    practitioners?: Practitioner[];
    _id: string;
    createdAt: Date;
    updatedAt: Date;
}
export declare const UserSchema: mongoose.Schema<User, mongoose.Model<User, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, User>;
