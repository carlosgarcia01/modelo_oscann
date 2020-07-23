import { Schema, model } from "mongoose";
import State from './state.model';

const SettingOscannSchema = new Schema({
  uid_oscann:String,
  id_state:{type:Schema.Types.ObjectId,ref:State,required:false},
  resolution:String,
  distance:String,
  width:String,
  subject:String,
  uid_oscann:String,
  lib_tracker:String,
  crtime:String,
  updated:{
    type:Boolean,
    default:false,
    required:false
  }

})

export default model('SettingOscann', SettingOscannSchema);
