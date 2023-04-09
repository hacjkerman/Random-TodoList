import mongoose from "mongoose";
import * as dotenv from "dotenv";
import User from "./User.js";
import returnUser from "./returnUser.js";

dotenv.config();

const addCurrentTodo = async (userName, userPass, currentTodo) => {
  mongoose
    .connect("mongodb://0.0.0.0:27017/newdb", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log(`CONNECTED TO MONGO!`);
    })
    .catch((err) => {
      console.log(`OH NO! MONGO CONNECTION ERROR!`);
      console.log(err);
    });

  const db = mongoose.connection;

  db.on("error", console.error.bind(console, "connection error:"));
  const user = await returnUser(userName, userPass);
  if (user === null) {
    return "No User Found";
  } else {
    user.currentTodo = currentTodo;
    user.save();
    return user;
  }
};

export default addCurrentTodo;
