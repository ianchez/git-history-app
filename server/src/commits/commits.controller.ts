import { Query, Controller, Get } from '@nestjs/common';
import { CommitsService } from './commits.service';
import { GetCommitsQuery } from './dto/get-commits-query.dto';

@Controller('commits')
export class CommitsController {
  constructor(private readonly commitsService: CommitsService) {}

  @Get()
  async getAllCommits(@Query() queryParams: GetCommitsQuery): Promise<any> {
    return this.commitsService.getAllCommits(queryParams);
  }
}
