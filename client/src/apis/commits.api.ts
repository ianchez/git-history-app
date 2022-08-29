import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Commit } from '../models/Commit';
import { GetCommitsQuery } from './dto/get-commits-query.dto';

export const commitsApi = createApi({
  reducerPath: "commitsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: '/commits',
  }),
  endpoints: (build) => ({
    getAllCommits: build.query<Commit[], GetCommitsQuery>({
      query: ({ username, repo }) => ({ url: `?username=${username}&repo=${repo}` }),
    })
  })
});

export const { useGetAllCommitsQuery } = commitsApi;