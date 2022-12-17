import { Module } from '@nestjs/common';
import { UsersModule } from '../users/users.module';
import { RepositoryController } from './repository.controller';
import { RepositoryService } from './repository.service';
import { RepositoryRepository } from './repository.repository';

@Module({
  imports: [UsersModule],
  controllers: [RepositoryController],
  providers: [RepositoryService, RepositoryRepository],
})
export class RepositoryModule {}
