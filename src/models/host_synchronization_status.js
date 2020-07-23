import { Schema, model } from "mongoose";
import Hospital from './hospital.model'
import State from './state.model'
import SynchronizeObject  from "./synchronize_object.model";
import SettingHost  from "./setting_host.model";

const SynchronizeObjectSchema = new Schema({

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
  
  synchronize_objects:[{
    type:Schema.Types.ObjectId,
    ref:synchronizeObject,
    required:false
  }],

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

export default model('SynchronizeObject', SynchronizeObjectSchema);
