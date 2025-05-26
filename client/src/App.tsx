import { createTheme, ThemeProvider } from "@mui/material";
import { pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Quiz from "./components/Quiz";
import { Rules } from "./components/Rules";
import { Layout } from "./Layout";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

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
          <Route path="/rules" element={<Rules />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </Layout>
);

export default App;
