import { Box, Card, CardContent, Link, Typography } from "@mui/material";
import { Commit } from "../models/Commit";

interface CommitCardProps {
  commit: Commit;
}

const CommitCardDetail = ({ commit }: CommitCardProps) => {
  return (
    <Box sx={{ width: '96%' }}>
      <Card variant="outlined" sx={{ marginBottom: 2, backgroundColor: 'rgb(21 31 35)' }}>
        <CardContent>
          <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
            {(new Date(commit.commit.author.date)).toLocaleString()}
          </Typography>
          <Typography sx={{ fontSize: 14 }} gutterBottom>
            {`Author: ${commit.commit.author.name}`}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {`Email: ${commit.commit.author.email}`}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {`SHA: ${commit.sha}`}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" >
            {'URL: '}<Link underline="hover" href={commit.htmlURL}>{commit.htmlURL}</Link>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default CommitCardDetail;