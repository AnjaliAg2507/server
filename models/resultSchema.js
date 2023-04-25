import mongoose from "mongoose";

const { Schema } = mongoose;

/** result model */
const resultModel = new Schema({
    rollNumber: { type: String},
    studentName: { type: String },
    topic: { type: String, required: true },
    point: { type: Number, default: 0 },
    easy: { type: Number, default: 0 },
    medium: { type: Number, default: 0 },
    hard: { type: Number, default: 0 },
    verdict: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }

});


export default mongoose.model("result", resultModel);