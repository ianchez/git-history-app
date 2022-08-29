import React, { ChangeEvent, useEffect, useState } from "react";
import { Box, Button, Card, CircularProgress, TextField, Typography } from "@mui/material";
import { useGetAllCommitsQuery } from "../apis/commits.api";
import CommitCardDetail from "../components/CommitCard";

const GitHistoryPage: React.FC = () => {
  const [username, setUsername] = useState('ianchez');
  const [repo, setRepo] = useState('git-history-app');
  const [inputValues, setInputValues] = useState({ username, repo })
  const { data: commits, isFetching: isFetchingAllCommits, refetch } = useGetAllCommitsQuery({ username, repo });

  useEffect(() => {
    refetch();
  }, [username, repo])

  const handleOnChangeInputs = ({ target }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputValues({ ...inputValues, [target.name]: target.value })
  }

  const handleGetCommits = (event: React.MouseEvent) => {
    event.preventDefault();
    setUsername(inputValues.username);
    setRepo(inputValues.repo);
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <Box component="form" sx={{ width: '80%', height: 300 }} >
        <Card variant="outlined" className="flex justify-center items-center flex-col p-6">
          <Typography variant="h5" sx={{ marginBottom: 2 }}>Welcome to the GitHistory Page!</Typography>
          <TextField
            sx={{ marginBottom: 2, width: '60%' }}
            label="Github Username"
            name="username"
            value={inputValues.username}
            onChange={handleOnChangeInputs}
          />
          <TextField
            sx={{ marginBottom: 2, width: '60%' }}
            label="Github Repo"
            name="repo"
            value={inputValues.repo}
            onChange={handleOnChangeInputs}
          />
          <Button variant="contained" type="submit" size="large" onClick={handleGetCommits}>
            Get commits!
          </Button>
        </Card>
      </Box>

      <Box sx={{ width: '80%', maxHeight: 600, overflow: 'auto' }} >
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
