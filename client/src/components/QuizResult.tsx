import { Stack, Typography } from "@mui/material";
import { common } from "@mui/material/colors";
import { FC } from "react";

interface IQuizResult {
  icon: any;
  message: string;
}

const QuizResult: FC<IQuizResult> = ({ icon, message }: IQuizResult) => (
  <Stack
    direction="row"
    alignItems="center"
    justifyContent="center"
    spacing={2}
  >
    {icon}
    <Typography variant="h5" color={common.white}>
      {message}
    </Typography>
  </Stack>
);

export default QuizResult;
