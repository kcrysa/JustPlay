export interface QuizResponse {
  questionNumber: number;
  category: string;
  correctAnswer: number;
  selectedAnswer: number;
  isCorrect: boolean;
  aborted: boolean;
  date: string;
}
