import mongoose from "mongoose";

export const startDB = async () => {
  try {
    mongoose.connect("mongodb://127.0.0.1:27017/ericbase");
    console.log("Se ha podido conectar con la BD");
  } catch (error) {
    console.log(error);
    return res.status(500).json("Internal Error Server");
  }
};
