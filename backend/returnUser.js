import mongoose from "mongoose";
import * as dotenv from "dotenv";
import User from "./User.js";

dotenv.config();

const returnUser = (userName, userPass) => {
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
  const MyModel = User;
  const user = MyModel.findOne({
    userName: userName,
    userPassword: userPass,
  });
  return user;
};

export default returnUser;
