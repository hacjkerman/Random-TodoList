import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();

const startMongo = () => {
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
    console.log("Connection Successful!");

    // define Schema
    const BookSchema = new mongoose.Schema({
      name: "string",
      price: "string",
      quantity: "string",
    });
    const Book = mongoose.model("Book", BookSchema);

    // a document instance
    const book1 = new Book({
      name: "Introduction to Mongoose",
      price: "10",
      quantity: "25",
    });

    // save model to database
    book1.save();
  });
};

export default startMongo;
