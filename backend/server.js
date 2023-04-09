import express from "express";
import * as dotenv from "dotenv";
import startMongo from "./storage.js";
import cors from "cors";
import findAllUsers from "./allUsers.js";
import createUser from "./createUser.js";
import returnUser from "./returnUser.js";
import addTodo from "./addTodo.js";
import addCurrentTodo from "./addCurrentTodo.js";

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

app.put("/newTodo", (req, res) => {
  const { userName, userPass, todo } = req.body;
  addTodo(userName, userPass, todo);
  res.json("new Todo added");
});

app.put("/newCurrentTodo", (req, res) => {
  const { userName, userPass, todo } = req.body;
  addCurrentTodo(userName, userPass, todo);
  res.json("new Current Todo added");
});

app.get("/allUsers", async (req, res) => {
  res.json(await findAllUsers());
});

app.post("/createNewUser", async (req, res) => {
  const { userName, userPass } = req.body;
  const response = await createUser(userName, userPass);
  res.json(response);
});

app.post("/userLogin", async (req, res) => {
  const { userName, userPass } = req.body;
  const response = await returnUser(userName, userPass);
  res.json(response);
});
