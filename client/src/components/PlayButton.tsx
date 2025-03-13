import { IconButton, IconButtonProps, styled } from "@mui/material";
import { common } from "@mui/material/colors";
import { PlayIcon } from "./icons/PlayIcon";

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
  onClick: () => void;
}

export const PlayButton = ({ onClick }: IPlayButton) => (
  <CustomButton onClick={onClick}>
    <PlayIcon iconStyle={{ width: 100, height: 100 }} />
  </CustomButton>
);
