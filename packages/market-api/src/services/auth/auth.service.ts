import { Injectable, UnauthorizedException, BadRequestException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { User } from 'src/models/user.model';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(user: User): Promise<any> {
    const foundUser = await this.usersService.findOne(user.email);
    if (foundUser && foundUser.password === user.password) {
      const { password, ...result } = foundUser;
      return this.generateToken(foundUser);
    }
    throw new BadRequestException('Invalid email or password');
  }

  async generateToken(user: any) {
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
