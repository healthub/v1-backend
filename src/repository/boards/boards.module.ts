import { Module } from '@nestjs/common';
import { UsersModule } from '../../users/users.module';
import { BoardsController } from './boards.controller';
import { BoardsService } from './boards.service';
import { BoardsRepository } from './boards.repository';
import { RepositoryModule } from '../repository.module';

@Module({
  imports: [UsersModule, RepositoryModule],
  controllers: [BoardsController],
  providers: [BoardsService, BoardsRepository],
})
export class BoardsModule {}
