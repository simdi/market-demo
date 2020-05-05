import { Module } from '@nestjs/common';
import { UsersService } from '../../services/users/users.service';
import { AuthService } from '../../services/auth/auth.service';

@Module({
  imports: [],
  controllers: [],
  providers: [UsersService, AuthService],
})
export class AuthModule {
  constructor(private usersService: UsersService) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
