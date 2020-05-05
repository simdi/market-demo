import { IsString, IsObject, IsArray } from 'class-validator';

export class User {
  id: number;
  @IsString()
  email: string;
  @IsString()
  password: string;

  constructor(partial: Partial<User>) {
    Object.assign(this, partial);
  }
}