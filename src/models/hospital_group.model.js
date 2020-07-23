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
    required: false, 
  },
  name: String,
  description: String,
  creation_date: {
    type: Date,
    default: Date.now(),
  },
  update_date: Date,
  updated:{
    type:Boolean,
    default:false,
    required:false
  }
})

export default model('HospitalGroup', hospitalGroupSchema);
