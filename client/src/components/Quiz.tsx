import { Paper, Stack, Typography } from "@mui/material";
import axios from "axios";
import moment from "moment";
import { useCallback, useState } from "react";
import "../App.css";
import { questions } from "../data/questions";
import { IQuestion, QUESTION_CATEGORIES } from "../models/Question";
import { IQuizResponse } from "../models/QuizResponse";
import { PlayByCategoryButton } from "./PlayByCategoryButton";
import QuestionPopup from "./QuestionPopup";

const Quiz = () => {
  const [questionPopupOpen, setQuestionPopupOpen] = useState<boolean>(false);
  const [question, setQuestion] = useState<IQuestion | null>(null);

  const onShowQuestionHandler = (category: string) => {
    const questionsByCategory = questions.filter(
      (q: IQuestion) => q.category === category
    );
    const questionNumber = Math.floor(
      Math.random() * questionsByCategory.length
    );

    setQuestion(questionsByCategory[questionNumber]);
    setQuestionPopupOpen(true);
  };

  const onQuizSubmitHandler = useCallback(
    async (answerId: number) => {
      if (question === null) return;

      const quizResponse: IQuizResponse = {
        questionNumber: question.id,
        category: question.category,
        correctAnswer: question.answerId,
        selectedAnswer: answerId,
        isCorrect: question.answerId === answerId,
        aborted: false,
        date: moment().format("DD.MM.YYYY HH:mm:ss"),
      };

      await axios.post("/api/responses", quizResponse);
    },
    [question]
  );

  const onQuizClose = useCallback(
    async (isCancel: boolean, callback: Function) => {
      if (question === null) return;

      if (isCancel) {
        const quizResponse: IQuizResponse = {
          questionNumber: question.id,
          category: question.category,
          correctAnswer: question.answerId,
          selectedAnswer: 0,
          isCorrect: false,
          aborted: true,
          date: moment().format("DD.MM.YYYY HH:mm:ss"),
        };

        await axios.post("/api/responses", quizResponse);
      }

      callback();
      setQuestionPopupOpen(false);
      setQuestion(null);
    },
    [question]
  );

  return (
    <>
      {question === null ? (
        <Stack width={600} alignItems="center" spacing={10}>
          <Paper
            elevation={2}
            sx={{ width: "100%", textAlign: "center", padding: 1 }}
          >
            <Typography fontSize={40} fontWeight={600} color="#ffffff">
              Choose your Question Category
            </Typography>
          </Paper>
          <Stack width="100%" direction="row" justifyContent="space-between">
            <PlayByCategoryButton
              category={QUESTION_CATEGORIES.TECH}
              onClick={() => onShowQuestionHandler(QUESTION_CATEGORIES.TECH)}
            />
            <PlayByCategoryButton
              category={QUESTION_CATEGORIES.BRAINTEASER}
              onClick={() =>
                onShowQuestionHandler(QUESTION_CATEGORIES.BRAINTEASER)
              }
            />
          </Stack>
          <PlayByCategoryButton
            category={QUESTION_CATEGORIES.VOIS}
            onClick={() => onShowQuestionHandler(QUESTION_CATEGORIES.VOIS)}
          />
        </Stack>
      ) : (
        <QuestionPopup
          open={questionPopupOpen}
          question={question}
          handleQuizSubmit={onQuizSubmitHandler}
          handleModalClose={onQuizClose}
        />
      )}
    </>
  );
};

export default Quiz;
