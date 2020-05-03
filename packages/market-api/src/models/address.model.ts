import { IsString, IsObject } from 'class-validator';

export class Address {
  @IsString()
  streetNumber: string;
  @IsString()
  fullAddress: string;
  @IsString()
  city: string;
  @IsString()
  country: string;
  @IsObject()
  location: {
    lng: number;
    lat: number;
  };
}