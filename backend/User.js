import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  todo: String,
  time: Number,
});

export default function user() {
  mongoose.model("User", userSchema);
}
