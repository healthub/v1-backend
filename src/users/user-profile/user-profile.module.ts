import { Module } from '@nestjs/common';
import { UserProfileController } from './user-profile.controller';
import { UserProfileService } from './user-profile.service';
import { UserProfileRepository } from './user-profile.repository';
import { UsersModule } from '../users.module';

@Module({
  imports: [UsersModule],
  controllers: [UserProfileController],
  providers: [UserProfileService, UserProfileRepository],
})
export class UserProfileModule {}
