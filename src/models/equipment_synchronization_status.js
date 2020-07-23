import { Schema, model } from "mongoose";
import Hospital from './hospital.model'
import State from './state.model'
import Study from './study.model'
import synchronizeObject  from "./synchronize_object.model";

const synchronizeObjectSchema = new Schema({
  id_synchronize_state: {
    type: String,
    required: true,
  },
  id_hospital: {
    type: Schema.Types.ObjectId,
    ref: Hospital,
    required:false,
  },
  id_state: {
    type: Schema.Types.id_state,
    ref:State,
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

export default model('synchronizeObject', synchronizeObjectSchema);
