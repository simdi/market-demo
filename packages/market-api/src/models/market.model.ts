import { IsString, IsObject, IsArray } from 'class-validator';
import { Address } from './address.model';

export class Market {
  id: string;
  @IsString()
  name: string;
  @IsArray()
  imageURLs: string[];
  @IsString()
  description: string;
  @IsString()
  category: string;
  @IsObject()
  address: Address

  constructor(partial: Partial<Market>) {
    Object.assign(this, partial);
  }
}