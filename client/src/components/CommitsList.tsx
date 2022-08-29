import { Commit } from '../models/Commit';

import { Box, Card, CircularProgress } from "@mui/material";
import CommitCardDetail from "../components/CommitCardDetail";

interface CommitListProps {
  isLoading: boolean;
  commits: Commit[] | undefined;
}

const CommitsList = ({ isLoading, commits }: CommitListProps) => {
  return (
    <Box sx={{ width: '80%', maxHeight: 600, overflow: 'auto', marginTop: 1 }} >
      <Card variant="outlined" className="flex justify-center items-center flex-col py-4">
        {isLoading
          ? <Box className="flex justify-center items-center"><CircularProgress /></Box>
          : commits?.map((commit) =>
              <CommitCardDetail key={commit.sha} commit={commit}/>
            )
        }
      </Card>
    </Box>
  );
};

export default CommitsList;