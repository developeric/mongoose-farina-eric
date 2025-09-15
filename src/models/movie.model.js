import { Schema, Types, model } from "mongoose";
const MovieSchema = new Schema(
  {
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
      type: Number,
    },
    //relacion 1:M
    director: {
      type: Types.ObjectId,
      ref: "Director",
      required: true,
    },

    //relacion M:M
    actores: {
      type: [Types.ObjectId],
      ref: "ActorMovie",
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

export const MovieModel = model("Movie", MovieSchema);
