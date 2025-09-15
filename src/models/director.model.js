import { Schema, model, Types, Mongoose } from "mongoose";

//Embebido
const mitaisesdeldirectorSchema = new Schema({
  name: {
    type: String,
  },
  color: {
    type: Boolean, //Blanco: true
    required: true, //Negro: false
  },
});

//Director
const DirectorSchema = new Schema(
  {
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
    extraData: {
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
      },    hijos:[mitaisesdeldirectorSchema]
    },
    //los mitaises

  },
  {
    versionKey: false,
  }
);
//mitaises del director
export const MitaisesModel = model("Mataises", mitaisesdeldirectorSchema);
//Director
export const DirectorModel = model("Director", DirectorSchema);






//MODELO DE COMO COLOCAR Y PROBAR

// {
// 	"name":"matias",
// 	"age":1999,
// 	"movies":100,
// 	"extraData":{
// 		"married":true,
// 		"dni":12345678,
// 		"firstMovie":"primera movie",
// 		"hijos":[{
// 			"name":"Pedro",
// 			"color":false
// 		}]
		
// }}