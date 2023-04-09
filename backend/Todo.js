import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  todo: { todo: String, time: String },
});

export default mongoose.model("Todo", todoSchema);
