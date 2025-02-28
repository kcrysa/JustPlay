import { Stack, Typography } from "@mui/material";
import { common } from "@mui/material/colors";
import { FC } from "react";

interface IQuizResult {
  icon: any;
  alt: string;
  message: string;
}

const QuizResult: FC<IQuizResult> = ({ icon, alt, message }: IQuizResult) => (
  <Stack
    direction="row"
    alignItems="center"
    justifyContent="center"
    spacing={2}
  >
    <img src={icon} alt={alt} style={{ width: 50 }} />
    <Typography variant="h5" color={common.white}>
      {message}
    </Typography>
  </Stack>
);

export default QuizResult;
