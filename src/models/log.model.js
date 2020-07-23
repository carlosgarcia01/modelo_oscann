import { Schema, model } from "mongoose";
import Process from "./process.model";
import State from "./state.model";
import User from "./user.model";


const LogSchema = new Schema({

  id_log:{
    type:String,
    required:true
  },
  id_process:{
    type:Schema.Types.ObjectId,
    ref:Process,
    required:true
  },
  id_state:{
    type:Schema.Types.ObjectId,
    ref:State,
    required:true
  },
  id_user:{
    type:Schema.Types.ObjectId,
    ref:User,
    required:true
  },
  description: {
    type:String,
    required:false,

  },
  creation_date: {
    type:String,
    default:new Date.now(),
    required:false,

  },
  update_date: {
    type:String,
    required:false,
  }
})

export default model('Log', LogSchema);
