import { ReactNode } from "react";
import { IAnswer } from "./Answer";

export interface IQuestion {
  id: number;
  text: ReactNode;
  category: string;
  answers: IAnswer[];
  answerId: number;
}

export const QUESTION_CATEGORIES = {
  TECH: "tech",
  BRAINTEASER: "brainteaser",
  VOIS: "vois",
};
