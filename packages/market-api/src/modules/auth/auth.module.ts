import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from '../../services/auth/auth.service';
import { AuthController } from '../../controllers/auth/auth.controller';
import { UsersModule } from '../../modules/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/utils/constants';
import { JwtStrategy } from 'src/services/auth/jwt.strategy';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    UsersModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1d' },
    })
  ,],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [PassportModule, JwtStrategy]
})
export class AuthModule {}