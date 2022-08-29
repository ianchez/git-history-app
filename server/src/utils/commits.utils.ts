export const normalizeCommitsResponse = (response) => {
  if (!Array.isArray(response)) return response;

  return response.map(normalizeCommits);
};

const normalizeCommits = (commit) => {
  return {
    sha: commit.sha,
    commit: commit.commit,
    htmlURL: commit.html_url,
  };
};
