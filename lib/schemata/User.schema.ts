import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { GlobalStatus } from '../GlobalStatus';
import * as mongoose from 'mongoose';
import { Practitioner } from './Practitioner.schema';
import { Profile } from './Profile.schema';

export type UserDocument = User & Document;

export class PrivateKey {
  @Prop()
  @ApiProperty()
  encWithPassword: string;

  @Prop()
  @ApiProperty()
  encWithRecovery: string;
}

export class SymmetricKey {
  @Prop()
  @ApiProperty()
  encWithPublicKey: string;

  @Prop()
  @ApiProperty({
    type: String,
    format: 'uuid',
  })
  keyId: string;
}

export class CryptoData {
  @Prop({ type: () => PrivateKey })
  @ApiProperty({ type: PrivateKey })
  privateKey: PrivateKey;

  @Prop({ type: () => [SymmetricKey], default: [] })
  @ApiPropertyOptional({ type: [SymmetricKey] })
  symKeys: SymmetricKey[];
}

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true })
  @ApiProperty()
  email: string;

  @Prop({ required: true })
  @ApiProperty()
  firstName: string;

  @Prop({ required: true })
  @ApiProperty()
  lastName: string;

  @Prop({ type: () => GlobalStatus, default: GlobalStatus.PENDING })
  @ApiProperty()
  status: GlobalStatus;

  @Prop()
  @ApiProperty()
  keycloakId: string;

  @Prop()
  @ApiProperty()
  cryptoData: CryptoData;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Profile' }], default: [] })
  @ApiPropertyOptional({
    type: () => [Profile],
  })
  profiles?: Profile[];

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Practitioner' }], default: [] })
  @ApiPropertyOptional({
    type: () => [Practitioner],
  })
  practitioners?: Practitioner[];

  @ApiProperty({
    type: String,
    format: 'uuid',
  })
  _id: string;

  @Prop()
  @ApiProperty()
  createdAt: Date;

  @Prop()
  @ApiProperty()
  updatedAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
