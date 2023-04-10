import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userId: String,
  userName: String,
  userPassword: String,
  todo: [],
  currentTodo: [],
});

export default mongoose.model("User", userSchema);
