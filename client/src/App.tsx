import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Quiz from "./components/Quiz";
import { Layout } from "./Layout";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
  typography: {
    fontFamily: "VodafoneRg",
  },
});

const App = () => (
  <Layout>
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Quiz />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </Layout>
);

export default App;
