import React, { useEffect, useState } from "react";
import { Box, Card, CircularProgress } from "@mui/material";
import { useGetAllCommitsQuery } from "../apis/commits.api";
import CommitCardDetail from "../components/CommitCardDetail";
import RequestForm from "../components/RequestForm";
import { GetCommitsQuery } from "../apis/dto/get-commits-query.dto";

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
      <RequestForm handleSubmit={handleGetCommits}/>

      <Box sx={{ width: '80%', maxHeight: 600, overflow: 'auto', marginTop: 1 }} >
        <Card variant="outlined" className="flex justify-center items-center flex-col py-4">
          {isFetchingAllCommits
            ? <Box className="flex justify-center items-center"><CircularProgress /></Box>
            : commits?.map((commit) =>
                <CommitCardDetail key={commit.sha} commit={commit}/>
              )
          }
        </Card>
      </Box>
    </div>
  );
};

export { GitHistoryPage };
