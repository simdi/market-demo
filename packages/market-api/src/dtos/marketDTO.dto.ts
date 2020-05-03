import { IsString, IsArray } from 'class-validator';

export class MarketDTO {
  @IsString()
  name: string;
  @IsArray()
  imageURLs: [string];
  @IsString()
  description: string;
  @IsString()
  category: string;
  @IsString()
  address: string;

  constructor(partial: Partial<MarketDTO>) {
    Object.assign(this, partial);
  }
}