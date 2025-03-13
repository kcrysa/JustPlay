import {
  Button,
  ButtonProps,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  IconButton,
  Radio,
  RadioGroup,
  colors,
  styled,
} from "@mui/material";
import { purple } from "@mui/material/colors";
import { shuffle } from "lodash";
import { FC, useCallback, useEffect, useState } from "react";
import { IAnswer } from "../models/Answer";
import { IQuestion } from "../models/Question";
import { CelebrateIcon } from "./icons/CelebrateIcon";
import { CloseIcon } from "./icons/CloseIcon";
import { FailIcon } from "./icons/FailIcon";
import QuizResult from "./QuizResult";

interface IQuestionPopup {
  open: boolean;
  question: IQuestion;
  handleQuizSubmit: (answerId: number) => void;
  handleModalClose: (isCancel: boolean, callback: Function) => void;
}

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  "&:hover": {
    backgroundColor: purple[700],
  },
}));

const QuestionPopup: FC<IQuestionPopup> = ({
  open,
  question,
  handleQuizSubmit,
  handleModalClose,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [shuffledAnswers, setShuffledAnswers] = useState<IAnswer[]>([]);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  useEffect(() => {
    if (open) {
      setShuffledAnswers(shuffle(question.answers));
    }
  }, [open, question.answers]);

  useEffect(() => {
    if (isSubmitted && selectedAnswer !== null) {
      handleQuizSubmit(selectedAnswer);
    }
  }, [isSubmitted, selectedAnswer]);

  const quizEndCallback = () => {
    setIsSubmitted(false);
    setSelectedAnswer(null);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedAnswer(Number((event.target as HTMLInputElement).value));
  };

  const handleClose = useCallback(
    (_event: {}, reason: string) => {
      if (reason === "backdropClick") {
        return;
      }
      handleModalClose(!isSubmitted, quizEndCallback);
    },
    [isSubmitted]
  );

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      disableEscapeKeyDown
      maxWidth="md"
      slotProps={{
        paper: {
          style: {
            backgroundColor: colors.common.black,
            color: colors.common.white,
          },
        },
      }}
    >
      <DialogTitle>
        <IconButton
          onClick={(event: any) => handleClose(event, "closeButton")}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <div style={{ fontSize: "1.2em", marginBottom: "20px" }}>
          {question.text}
        </div>
        <FormControl>
          <RadioGroup
            name="answers-group"
            value={selectedAnswer}
            onChange={handleChange}
          >
            {shuffledAnswers.map((answer: IAnswer) => (
              <FormControlLabel
                key={answer.id}
                value={answer.id}
                label={answer.text}
                control={
                  <Radio
                    disabled={isSubmitted}
                    sx={{
                      color:
                        isSubmitted && question.answerId === answer.id
                          ? colors.green[800]
                          : colors.grey[400],
                      "&.Mui-checked": {
                        color:
                          isSubmitted && question.answerId === answer.id
                            ? colors.green[800]
                            : colors.grey[400],
                      },
                      "&.Mui-disabled": {
                        color:
                          isSubmitted && question.answerId === answer.id
                            ? colors.green[300]
                            : colors.grey[700],
                      },
                    }}
                  />
                }
              />
            ))}
          </RadioGroup>
        </FormControl>
      </DialogContent>
      <DialogActions style={{ justifyContent: "space-around" }}>
        {!isSubmitted ? (
          <ColorButton
            variant="contained"
            size="large"
            className="submit-button"
            onClick={() => setIsSubmitted(true)}
            disabled={selectedAnswer === null}
          >
            Submit
          </ColorButton>
        ) : (
          <>
            {selectedAnswer === question.answerId ? (
              <QuizResult
                icon={<CelebrateIcon iconStyle={{ width: 40, height: 40 }} />}
                message="Correct!"
              />
            ) : (
              <QuizResult
                icon={<FailIcon iconStyle={{ width: 40, height: 40 }} />}
                message="Wrong answer"
              />
            )}
          </>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default QuestionPopup;
