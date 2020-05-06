import { IsString, IsObject } from 'class-validator';

export class Address {
  @IsString()
  streetNumber: string;
  @IsString()
  street: string;
  @IsString()
  fullAddress: string;
  @IsString()
  city: string;
  @IsString()
  state: string;
  @IsString()
  country: string;
  @IsObject()
  location: {
    lng: number;
    lat: number;
  };
}