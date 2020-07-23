import { Schema, model } from "mongoose";
import Process from "./process.model";
import State from "./state.model";
import User from "./user.model";

const LogSchema = new Schema({
  
  id_process:{
    type:Schema.Types.ObjectId,
    ref:Process,
    required:false
  },
  id_state:{
    type:Schema.Types.ObjectId,
    ref:State,
    required:false
  },
  id_user:{
    type:Schema.Types.ObjectId,
    ref:User,
    required:false
  },
  description: String,
  creation_date: {
    type:String,
    default:new Date.now(),
    required:false,

  },
  update_date:Date,
  updated:{
    type:Boolean,
    default:false,
    required:false
  }
})

export default model('Log', LogSchema);
