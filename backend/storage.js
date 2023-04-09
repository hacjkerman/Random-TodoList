import mongoose from "mongoose";
import * as dotenv from "dotenv";
import User from "./User.js";
import { v4 as uuidv4 } from "uuid";

dotenv.config();

const startMongo = (userName, userPass) => {
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

  db.once("open", function () {
    const uuid = uuidv4();
    const newUser = new User({
      userId: uuid,
    });
    console.log("Success!");

    // save model to database
    newUser.save();
  });
};

export default startMongo;
