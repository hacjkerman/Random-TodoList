import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();

const startMongo = (todoArray) => {
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
    console.log("Success!");

    // define Schema
    const TodoSchema = new mongoose.Schema({
      todo: Array,
    });
    const Todo = mongoose.model("Todo", TodoSchema);

    // a document instance
    const todo1 = new Todo({
      todo: todoArray,
    });

    // save model to database
    todo1.save();
  });
};

export default startMongo;
