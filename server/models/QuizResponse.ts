export interface QuizResponse {
  questionNumber: number;
  correctAnswer: number;
  selectedAnswer: number;
  isCorrect: boolean;
  aborted: boolean;
  date: string;
}
