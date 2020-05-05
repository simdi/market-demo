import { Module } from '@nestjs/common';
import { UsersService } from 'src/services/users/users.service';

@Module({
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
