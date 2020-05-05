import { Controller,Request, UseGuards, Post, Get, Body, ValidationPipe } from '@nestjs/common';
import { AuthService } from 'src/services/auth/auth.service';
import { User } from 'src/models/user.model';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/login')
  async login(@Body(ValidationPipe) user: User): Promise<any> {
    return this.authService.validateUser(user);
  }
}
