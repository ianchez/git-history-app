import React, { ChangeEvent, useEffect, useState } from "react";
import { Box, Button, Card, CardContent, CircularProgress, Link, TextField, Typography } from "@mui/material";
import { useGetAllCommitsQuery } from "../apis/commits.api";

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

  const handleGetCommits = () => {
    setUsername(inputValues.username);
    setRepo(inputValues.repo);
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <Card variant="outlined" sx={{ width: '80%', height: 300 }} className="flex justify-center items-center flex-col p-2">
        <Typography variant="h5" sx={{ marginBottom: 2 }}>Welcome to the GitHistory Page!</Typography>
        <TextField sx={{ marginBottom: 2 }} label="Github Username" name="username" value={inputValues.username} onChange={handleOnChangeInputs}/>
        <TextField sx={{ marginBottom: 2 }} label="Github Repo" name="repo" value={inputValues.repo} onChange={handleOnChangeInputs}/>
        <Button variant="contained" size="large" onClick={handleGetCommits}>
          Get commits!
        </Button>
      </Card>

      <Card variant="outlined" sx={{ width: '80%', overflow: 'auto' }} className="flex justify-center items-center flex-col p-2 h-90">
        {isFetchingAllCommits
          ? <Box className="flex justify-center items-center"><CircularProgress /></Box>
          : commits?.map((commit) =>
            <Box key={commit.sha} sx={{ width: '96%' }}>
              <Card variant="outlined" sx={{ marginBottom: 2 }}>
                <CardContent>
                  <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
                    {commit.commit.author.date}
                  </Typography>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {`Author: ${commit.commit.author.name}`}
                  </Typography>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {`Email: ${commit.commit.author.email}`}
                  </Typography>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {`SHA: ${commit.sha}`}
                  </Typography>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {'URL: '}<Link underline="hover">{commit.htmlURL}</Link>
                  </Typography>
                </CardContent>
              </Card>
            </Box>
        )}
      </Card>
    </div>
  );
};

export { GitHistoryPage };
