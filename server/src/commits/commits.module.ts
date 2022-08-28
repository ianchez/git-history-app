import { Module } from '@nestjs/common';
import { CommitsController } from './commits.controller';
import { CommitsService } from './commits.service';

@Module({
  controllers: [CommitsController],
  providers: [CommitsService],
})
export class CommitsModule {}
