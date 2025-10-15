import {
  IconButton,
  IconButtonProps,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import { common } from "@mui/material/colors";
import { QUESTION_CATEGORIES } from "../models/Question";
import { BrainteaserIcon } from "./icons/BrainteaserIcon";
import { TechIcon } from "./icons/TechIcon";
import { TriviaIcon } from "./icons/TriviaIcon";

const CustomButton = styled(IconButton)<IconButtonProps>(() => ({
  color: common.black,
  backgroundColor: common.white,
  border: 0,
  width: "200px",
  height: "200px",
  borderRadius: "50%",
  boxShadow: "0 0 10px 0 rgba(0,0,0,0.5)",
  "&:hover": {
    backgroundColor: common.white,
    boxShadow: "0 0 10px 5px rgba(0,0,0,0.5)",
  },
  "&:active": {
    backgroundColor: common.white,
    boxShadow: "0 0 10px 5px rgba(0,0,0,0.5)",
  },
  "&:focus": {
    backgroundColor: common.white,
    boxShadow: "0 0 10px 5px rgba(0,0,0,0.5)",
  },
}));

interface IPlayButton {
  category: string;
  onClick: () => void;
}

export const PlayByCategoryButton = ({ category, onClick }: IPlayButton) => (
  <CustomButton onClick={onClick}>
    <Stack alignItems="center">
      {category === QUESTION_CATEGORIES.TECH && (
        <TechIcon iconStyle={{ width: 100, height: 100 }} />
      )}
      {category === QUESTION_CATEGORIES.BRAINTEASER && (
        <BrainteaserIcon iconStyle={{ width: 100, height: 100 }} />
      )}
      {category === QUESTION_CATEGORIES.VOIS && (
        <TriviaIcon iconStyle={{ width: 100, height: 100 }} />
      )}
      <Typography
        fontSize={22}
        fontWeight={600}
        textTransform="uppercase"
      >
        {category}
      </Typography>
    </Stack>
  </CustomButton>
);
