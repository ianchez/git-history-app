import { Injectable } from '@nestjs/common';
import { GetCommitsRequest } from './dto/get-commits-request.dto';

@Injectable()
export class CommitsService {
  async getAllCommits(getCommitsRequest: GetCommitsRequest): Promise<any> {
    try {
      const { username, repo } = getCommitsRequest;
      return fetch(`https://api.github.com/repos/${username}/${repo}/commits`);
    } catch (error) {
      console.log('ERROR getAllCommits ERROR', error);
    }
  }
}
