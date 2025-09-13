import { Schema, model } from "mongoose";
const MovieSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  lenguage: {
    type: String,
    required: true,
  },
  duration: {
    type: Number
  },
});

export const MovieModel = model("movie", MovieSchema);