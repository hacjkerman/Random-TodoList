import express from "express";
import * as dotenv from "dotenv";
import startMongo from "./storage.js";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Hello");
});

app.post("/store", (req, res) => {
  console.log(req.body);
  startMongo(req.body);
  res.send("complete");
});

app.put("/updateTodo", (req, res) => {});
