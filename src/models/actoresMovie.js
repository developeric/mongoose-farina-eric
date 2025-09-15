import { Schema,model, Types } from "mongoose";

const actormodelSchema = new Schema({
actores:{
    type:Types.ObjectId,
    ref:"Actores",
},
movies:{
    type:Types.ObjectId,
    ref:"Movie",
}
},{
    versionKey:false
});

export const ActorMovieModel = model("ActorMovie", actormodelSchema);



//MODELO PARA MANDAR

// {
// 	"actores":"68c77e2a3f83b6188c757e5b",
// 	"movies":"68c77e433f83b6188c757e5d"
// }