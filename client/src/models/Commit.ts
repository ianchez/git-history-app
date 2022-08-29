export interface Commit {
  sha: string;
  commit: CommitDetail;
  htmlURL: string;
}

interface CommitDetail {
  author: {
    name: string;
    email: string;
    date: string;
  };
  commiter: {
    name: string;
    email: string;
    date: string;
  },
  message: string;
  tree: {
    sha: string;
    url: string;
  };
  url: string;
  comment_count: number;
  verification: {
    verified: boolean;
    reason: string;
    signature: any,
    payload: any
  };
}