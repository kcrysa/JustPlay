import {
  IconButton,
  IconButtonProps,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import { common } from "@mui/material/colors";
import { QUESTION_CATEGORIES } from "../models/Question";
import { AWSIcon } from "./icons/AWSIcon";
import { GCPIcon } from "./icons/GCPIcon";
import { PlatformAutomationIcon } from "./icons/PlatformAutomationIcon";
import { TerraformIcon } from "./icons/TerraformIcon";

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
  showLabel?: boolean;
}

export const PlayByCategoryButton = ({
  category,
  onClick,
  showLabel = true,
}: IPlayButton) => (
  <CustomButton onClick={onClick}>
    <Stack alignItems="center">
      {category === QUESTION_CATEGORIES.AWS && (
        <AWSIcon iconStyle={{ width: 100, height: 100 }} />
      )}
      {category === QUESTION_CATEGORIES.GCP && (
        <GCPIcon iconStyle={{ width: 100, height: 100 }} />
      )}
      {category === QUESTION_CATEGORIES.TERRAFORM && (
        <TerraformIcon iconStyle={{ width: 100, height: 100 }} />
      )}
      {category === QUESTION_CATEGORIES.PLATFORMS_AND_AUTOMATION && (
        <PlatformAutomationIcon iconStyle={{ width: 100, height: 100 }} />
      )}
      {showLabel && (
        <Typography fontSize={16} fontWeight={600} textTransform="uppercase">
          {category}
        </Typography>
      )}
    </Stack>
  </CustomButton>
);
