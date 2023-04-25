import mongoose from "mongoose";
const { Schema } = mongoose;

/** quiz model */
const quizModel = new Schema({
  question: { type: String, required: true },
  options: { type: [String], required: true },
  answer: { type: String, required: true },
  difficulty: { type: String, enum: ['easy', 'medium', 'hard'], required: true },
  topic: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});


export default mongoose.model('Quiz', quizModel);
