import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
<<<<<<< HEAD
  providers: [UsersService],
=======
  providers: [UsersService, UsersRepository],
>>>>>>> parent of e1135c0 (Revert "solve error: user API crud")
})
export class UsersModule {}
