import React, { useEffect, useState } from "react";
import { useGetAllCommitsQuery } from "../apis/commits.api";
import { GetCommitsQuery } from "../apis/dto/get-commits-query.dto";

import RequestForm from "../components/RequestForm";
import CommitsList from "../components/CommitsList";

const GitHistoryPage: React.FC = () => {
  const [username, setUsername] = useState('ianchez');
  const [repo, setRepo] = useState('git-history-app');
  const { data: commits, isFetching: isFetchingAllCommits, refetch } = useGetAllCommitsQuery({ username, repo });

  useEffect(() => {
    refetch();
  }, [username, repo])

  const handleGetCommits = (event: React.MouseEvent, inputValues: GetCommitsQuery) => {
    event.preventDefault();
    setUsername(inputValues.username);
    setRepo(inputValues.repo);
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <RequestForm
        handleSubmit={handleGetCommits}
      />

      <CommitsList
        isLoading={isFetchingAllCommits}
        commits={commits}
      />
    </div>
  );
};

export { GitHistoryPage };
