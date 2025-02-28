import axios from "axios";
import moment from "moment";
import { useCallback, useState } from "react";
import "../App.css";
import { questions } from "../data/questions";
import { IQuestion } from "../models/Question";
import { IQuizResponse } from "../models/QuizResponse";
import { PlayButton } from "./PlayButton";
import QuestionPopup from "./QuestionPopup";

const Quiz = () => {
  const [questionPopupOpen, setQuestionPopupOpen] = useState<boolean>(false);
  const [question, setQuestion] = useState<IQuestion | null>(null);

  const onShowQuestionHandler = () => {
    const questionNumber = Math.floor(Math.random() * questions.length);

    setQuestion(questions[questionNumber]);
    setQuestionPopupOpen(true);
  };

  const onQuizSubmitHandler = useCallback(
    async (answerId: number) => {
      if (question === null) return;

      const quizResponse: IQuizResponse = {
        questionNumber: question.id,
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
        <PlayButton onClick={onShowQuestionHandler} />
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
