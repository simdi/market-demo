import { Injectable } from '@nestjs/common';
import { User } from '../../models/user.model';

@Injectable()
export class UsersService {
  private readonly users: User[] = [];
  private readonly secret = process.env.SECRET_KEY;

  constructor() {
    this.users = [
      {
        "id": 1,
        "email": 'test@theagromall.com',
        "password": 'password'
      }
    ];
  }
}
