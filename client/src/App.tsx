import { createTheme, Stack, ThemeProvider } from "@mui/material";
import "./App.css";
import Quiz from "./components/Quiz";
import VoisLogo from "./assets/vois_logo_white.png";
import VodafoneLogo from "./assets/vodafone_logo.png";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
  typography: {
    fontFamily: "VodafoneRg",
  },
});

const App = () => (
  <Stack
    justifyContent="center"
    alignItems="center"
    direction="column"
    spacing={2}
    style={{ width: "100%" }}
  >
    <Stack
      justifyContent="center"
      alignItems="center"
      style={{ width: "100%", flexGrow: 10 }}
    >
      <ThemeProvider theme={darkTheme}>
        <Quiz />
      </ThemeProvider>
    </Stack>
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      style={{ width: "100%", paddingBottom: "20px" }}
    >
      <img
        src={VodafoneLogo}
        style={{ width: 120, height: "auto", marginLeft: "30px" }}
        alt="Vodafone Logo"
      />
      <img
        src={VoisLogo}
        style={{ width: 140, height: "auto", marginRight: "50px" }}
        alt="Vois Logo"
      />
    </Stack>
  </Stack>
);

export default App;
