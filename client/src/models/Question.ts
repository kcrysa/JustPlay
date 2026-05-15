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
  PLATFORMS_AND_AUTOMATION: "platforms and automation",
  AWS: "aws",
  GCP: "gcp",
  TERRAFORM: "terraform",
  BRAINTEASER: "brainteaser",
  VOIS: "vois",
};
