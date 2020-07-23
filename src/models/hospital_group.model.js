import { Schema, model } from "mongoose";
import State from './state.model';

const hospitalGroupSchema = new Schema({
  id_hospital_group: {
    type: String,
    required: true,
  },
  id_state: { 
    type: Schema.Types.ObjectId, 
    ref: State, 
    required: true 
  },
  name:{
    type: String,
    required: true,
  },
  description:{
    type: String,
    required: true,
  },
  creation_date: {
    type: Date,
    default: Date.now(),
    required: true,
  },
  update_date: {
    type: Date,
    required: false,
  },
})

export default model('HospitalGroup', hospitalGroupSchema);
