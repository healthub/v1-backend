import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class TaskService {
  private readonly logger = new Logger(TaskService.name);

  @Cron('* * * * * *', { name: 'cronTask' })
  async handleCron() {
    this.logger.log('Task Called');
  }
}
