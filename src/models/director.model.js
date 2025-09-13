import { Schema, model, Types, Mongoose } from "mongoose";

const DirectorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: false,
  },
  movies: {
    type: Number,
    required: true,
  },
  extraData: [
    {
      married: {
        type: Boolean,
        required: true,
      },
      dni: {
        type: Number,
        required: true,
        unique: true,
      },
      firstMovie: {
        type: String,
        required: true,
        unique: true,
      },
    },
  ],
});

export const DirectorModel = model("director", DirectorSchema);
