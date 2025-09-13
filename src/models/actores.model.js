import { model, Schema, Types } from "mongoose";

const ActorSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    age: {
      type: Number,
      required: true,
    },
    salary: {
      type: Number,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

export const ActorModel = model("Actor", ActorSchema);
