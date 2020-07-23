import { Schema, model } from "mongoose";
import State from './state.model';

const ProcessSchema = new Schema({
  description: String,
  update_date: Date,
  id_state: { 
    type: Schema.Types.ObjectId, 
    ref: State, 
    required: false, 
  },
  creation_date: {
    type: Date,
    default: Date.now(),
  },
  updated:{
    type:Boolean,
    default:false,
    required:false
  }
})

export default model('Process', ProcessSchema);
