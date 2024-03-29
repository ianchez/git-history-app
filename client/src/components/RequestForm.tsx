import { useState, ChangeEvent, MouseEvent } from "react";
import { Box, Button, Card, TextField, Typography } from "@mui/material";
import { GetCommitsQuery } from "../apis/dto/get-commits-query.dto";

export interface InputValues extends GetCommitsQuery {}
interface RequestFormProps {
  handleSubmit: (event: MouseEvent, inputValues: InputValues) => void;
}

const RequestForm = ({ handleSubmit }: RequestFormProps) => {
  const [inputValues, setInputValues] = useState({
    username: 'ianchez',
    repo: 'git-history-app',
  });

  const handleOnChangeInputs = ({ target }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputValues({ ...inputValues, [target.name]: target.value })
  }

  return (
    <Box component="form" sx={{ width: '80%', maxHeight: 400, marginTop: 1 }} >
      <Card variant="outlined" className="flex justify-center items-center flex-col p-6">
        <Typography variant="h5" sx={{ marginBottom: 4 }}>Get the commits history from the selected Github repo!</Typography>

        <TextField
          sx={{ marginBottom: 2, width: '60%' }}
          label="Github Repo"
          name="repo"
          value={inputValues.repo}
          onChange={handleOnChangeInputs}
          error={!inputValues.repo}
          helperText={!inputValues.repo && 'You must enter a Github repository name'}
        />
        <TextField
          sx={{ marginBottom: 2, width: '60%' }}
          label="Github Username (owner)"
          name="username"
          value={inputValues.username}
          onChange={handleOnChangeInputs}
          error={!inputValues.username}
          helperText={!inputValues.username && 'You must enter a Github username'}
        />

        <Button
          variant="contained"
          type="submit"
          size="large"
          onClick={(e) => handleSubmit(e, inputValues)}
          disabled={!inputValues.username || !inputValues.repo}
        >
          Get commits!
        </Button>
      </Card>
    </Box>
  );
};

export default RequestForm;