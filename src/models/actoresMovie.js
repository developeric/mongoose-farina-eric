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
});

export const ActorMovieModel = model("ActorMovie", actormodelSchema);
