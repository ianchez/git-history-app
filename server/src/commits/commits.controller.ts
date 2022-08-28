import { Body, Controller, Get } from '@nestjs/common';
import { CommitsService } from './commits.service';
import { GetCommitsRequest } from './dto/get-commits-request.dto';

@Controller('commits')
export class CommitsController {
  constructor(private readonly commitsService: CommitsService) {}

  @Get()
  async getAllCommits(
    @Body() getCommitsRequest: GetCommitsRequest,
  ): Promise<any> {
    return this.commitsService.getAllCommits(getCommitsRequest);
  }
}
