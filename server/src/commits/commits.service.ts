import fetch from 'node-fetch';

import { Injectable } from '@nestjs/common';
import { GetCommitsQuery } from './dto/get-commits-query.dto';

@Injectable()
export class CommitsService {
  async getAllCommits(getCommitsQuery: GetCommitsQuery): Promise<any> {
    try {
      const { username, repo } = getCommitsQuery;
      return fetch(
        `https://api.github.com/repos/${username}/${repo}/commits`,
      ).then((res) => res.json());
    } catch (error) {
      console.log('ERROR getAllCommits ERROR', error);
    }
  }
}
