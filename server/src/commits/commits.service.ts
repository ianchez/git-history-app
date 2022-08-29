import fetch, { Headers } from 'node-fetch';

import { Injectable } from '@nestjs/common';
import { GetCommitsQuery } from './dto/get-commits-query.dto';
import { normalizeCommitsResponse } from '../utils/commits.utils';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class CommitsService {
  constructor(private readonly configService: ConfigService) {}

  async getAllCommits(queryParams: GetCommitsQuery): Promise<any> {
    try {
      const { username, repo } = queryParams;
      const headers = new Headers({
        Authorization: this.configService.get<string>('GIT_AUTH_TOKEN'),
      });

      return fetch(`https://api.github.com/repos/${username}/${repo}/commits`, {
        method: 'GET',
        headers,
      })
        .then((res) => res.json())
        .then((json) => normalizeCommitsResponse(json));
    } catch (error) {
      console.log('ERROR getAllCommits ERROR', error);
    }
  }
}
