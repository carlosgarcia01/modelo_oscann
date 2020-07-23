import { Schema, model } from "mongoose";
import Hospital from './hospital.model'
import State from './state.model'
import Study from './study.model'

const synchronizeObjectSchema = new Schema({
  id_synchronize_object: {
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
  id_study: {
    type: Schema.Types.id_state,
    ref:Study,
    required:false,
  },
  creation_date: {
    type: Date,
    default: new Date.now(),
  },
  update_date: Date,
})

export default model('synchronizeObject', synchronizeObjectSchema);
