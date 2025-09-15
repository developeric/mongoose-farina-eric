//Autor
//Idioma
//Contenido

import { Schema, model, Types } from "mongoose";

const GuionSchema = new Schema(
  {
    lenguage: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    //
    pelicula: {
      type: Types.ObjectId,
      ref: "Movie",
      required: true,
      unique: true,
    },
  },
  {
    versionKey: false,
  }
);

export const GuionModel = model("Guion", GuionSchema);




//MODELO DE COMO PROBAR

// {
// 	"lenguage":"English",
// 	"author":"Borges",
// 	"year":1867,
// 	"pelicula":"68c731c682241d4ca850ac0b"
// }