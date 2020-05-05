import { Injectable } from '@nestjs/common';
import { User } from '../../models/user.model';

@Injectable()
export class UsersService {
  private readonly users: User[] = [];

  constructor() {
    this.users = [
      {
        "id": 1,
        "email": 'test@theagromall.com',
        "password": 'password'
      }
    ];
  }

  async findOne(email: string): Promise<User | undefined> {
    return this.users.find(user => user.email === email);
  }
}
