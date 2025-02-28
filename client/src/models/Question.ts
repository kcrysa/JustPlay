import { ReactNode } from "react";
import { IAnswer } from "./Answer";

export interface IQuestion {
  id: number;
  text: ReactNode;
  answers: IAnswer[];
  answerId: number;
}
