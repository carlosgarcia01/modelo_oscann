import { Schema, model } from "mongoose";
import Hospital from "./hospital.model";
import User from './user.model'
import State from "./state.model";
import OscannUid from "./oscann_uid.model";

const SettingHostSchema = new Schema({
  id_computer_ae:{
    type: String,
    required: true,
  },
  id_hospital:{
    type: Schema.Types.id_hospital, 
    ref: Hospital, 
    required: false, 
  },
  id_user:{
    type: Schema.Types.id_user, 
    ref: User, 
    required: false ,
  },
  id_state: { 
    type: Schema.Types.id_state, 
    ref: State, 
    required: false 
  },
  id_oscann:{
    type: Schema.Types.id_oscann, 
    ref: OscannUid, 
    required: false 
  },
  host_name: String,
  port_mac: String,
  port: String,
  uri: String,
  departament: String,
  root_path_file:String,
  limited_upper:Number,
  limited_lower:Number,
  available_capacity:Number,
  storage_available:Number,
  delete_concurrency:Number,
  deleted_date:Date,
  creation_date: {
    type: Date,
    default: new Date.now(),
  },
  update_date: Date,
  updated:{
    type:Boolean,
    default:false,
    required:false
  }
})

export default model('SettingHost', SettingHostSchema);
