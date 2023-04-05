import express from "express";
import { MongoClient, ServerApiVersion } from "mongodb";
import * as dotenv from "dotenv";
import startMongo from "./storage.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/store", (req, res) => {
  startMongo();
  res.send("connected");
});
