import fetch from 'node-fetch';

import { Injectable } from '@nestjs/common';
import { GetCommitsQuery } from './dto/get-commits-query.dto';
import { normalizeCommitsResponse } from '../utils/commits.utils';

@Injectable()
export class CommitsService {
  async getAllCommits(queryParams: GetCommitsQuery): Promise<any> {
    try {
      const { username, repo } = queryParams;
      return fetch(`https://api.github.com/repos/${username}/${repo}/commits`)
        .then((res) => res.json())
        .then((json) => normalizeCommitsResponse(json));
    } catch (error) {
      console.log('ERROR getAllCommits ERROR', error);
    }
  }
}
