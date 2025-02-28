import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import * as path from "path";
import { QuizResponse } from "../models/QuizResponse";
import { Pool } from "pg";

const PORT = process.env.PORT || 3001;
const RESPONSES_TABLE = process.env.RESPONSES_TABLE || "responses";

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

pool.on("error", function (err, client) {
  console.error("idle client error", err.message, err.stack);
});

const app = express();

app.use(express.static(path.resolve(process.cwd(), "../client/dist")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get("/api/responses", async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query(`SELECT * from ${RESPONSES_TABLE}`);
    client.release();

    return res.json(result.rows);
  } catch (error: any) {
    console.log(error);
    return res.json({
      success: false,
      error: "An unexpected error occurred while retrieving responses.",
    });
  }
});

app.post("/api/responses", async (req, res) => {
  try {
    const quizResponse: QuizResponse = req.body;
    const client = await pool.connect();
    await client.query({
      text: `insert into ${RESPONSES_TABLE}(\"questionNumber\", \"correctAnswer\", \"selectedAnswer\", \"isCorrect\", \"aborted\", \"date\") values ($1, $2, $3, $4, $5, $6)`,
      values: [
        quizResponse.questionNumber,
        quizResponse.correctAnswer,
        quizResponse.selectedAnswer,
        quizResponse.isCorrect,
        quizResponse.aborted,
        quizResponse.date,
      ],
    });
    client.release();

    return res.json({ success: true });
  } catch (error: any) {
    console.log(error);
    return res.json({
      success: false,
      error: "An unexpected error occurred while inserting the response.",
    });
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(process.cwd(), "../client/dist", "index.html"));
});

app.listen(PORT, () => {
  return console.log(`Express is listening at http://localhost:${PORT}`);
});
