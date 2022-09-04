import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export class GeoLocation {
    @ApiProperty({ type: [Number] })
    @Prop([Number])
    coordinates: number[];
  
    @ApiProperty()
    @Prop({ enum: ['Point'], default: 'Point', required: true })
    type: string;
  }

  export class Address {
    @ApiProperty()
    @Prop()
    street: string;
  
    @ApiProperty()
    @Prop()
    houseNumber: string;
  
    @ApiProperty()
    @Prop()
    zipCode: string;
  
    @ApiProperty()
    @Prop()
    city: string;
  
    @ApiProperty()
    @Prop()
    country: string;
  
    @ApiPropertyOptional()
    @Prop({ nullable: true })
    phoneNumber?: string;
  
    @ApiProperty()
    @Prop({ type: () => GeoLocation, index: '2dsphere' })
    location: GeoLocation;
  }