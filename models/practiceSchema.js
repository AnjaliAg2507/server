import mongoose from "mongoose";
const { Schema } = mongoose;


const practiceModel = new Schema({
  question: { type: String, required: true },
  options: { type: [String], required: true },
  answer: { type: String, required: true },
  topic: { type: String, required: true }
  });

export default mongoose.model('Practice', practiceModel);