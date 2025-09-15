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
    // las peliculas que realizó
    // pelicula:{
    //   type:[Types.ObjectId],
    //   ref:"ActorMovie",
    //   required:true
    // }
  },
  {
    versionKey: false,
  }
);

export const ActorModel = model("Actores", ActorSchema);


//MODELO DE COMO PROBAR

// {
// 	"name":"Eric Farina",
// 	"age":18,
// 	"salary":80000
// }