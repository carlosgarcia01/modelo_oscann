import { Schema, model } from "mongoose";
import Hospital from './hospital.model';
import State from './state.model';
import SettingHost  from "./setting_host.model";

const SyncHostStateSchema = new Schema({
  update_date: Date,  
  id_hospital: {
    type: Schema.Types.ObjectId,
    ref: Hospital,
    required:false,
  },
  id_state: {
    type: Schema.Types.ObjectId,
    ref:State,
    required:false,
  },
  id_host: {
    type: Schema.Types.ObjectId,
    ref:SettingHost,
    required:false,
  },

  creation_date: {
    type: Date,
    default: new Date.now(),
  },
  updated:{
    type:Boolean,
    default:false,
    required:false
  }
})

export default model('SyncHostState', SyncHostStateSchema);
