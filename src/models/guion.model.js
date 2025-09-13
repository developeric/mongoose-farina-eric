//Autor
//Idioma
//Contenido

import { Schema,model,Types } from "mongoose";

const GuionSchema = new Schema({
    lenguage:{
        type:String,
        required: true
    },
    author:{
        type: String,
        required: true,
    },
    year:{
        type: Number,
        required: true
    }
});

export const GuionModel = model("Guion",GuionSchema)