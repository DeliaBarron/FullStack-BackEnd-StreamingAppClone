import { Schema, model } from "mongoose";

const movieSchema = new Schema({
    title:{
        type:String,
        required: true
    },
    description:{
        type:String,
        required: true,
    },
    likes:String,
    image:{
        type:String,
        required:true
    },
    relDate:{
        type:String,
        required: true
    }
})
export default model("Movie", movieSchema)