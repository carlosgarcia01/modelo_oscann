import { Schema, model } from "mongoose";
import State from './state.model';
const SettingOscannSchema = new Schema({
  uid_oscann:String,
  id_state:{type:Schema.Types.ObjectId,ref:State,required:true},
  resolution:String,
  distance:String,
  width:String,
  subject:String,
  uid_oscann:String,
  lib_tracker:String,
  crtime:String,
  root_path_file:String,
})

export default model('SettingOscann', SettingOscannSchema);







