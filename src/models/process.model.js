import { Schema, model } from "mongoose";
import State from './state.model'

const processdSchema = new Schema({
  id_process:{
    type: String,
    required: true,
  },
  id_state: { 
    type: Schema.Types.ObjectId, 
    ref: State, 
    required: false, 
  },
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

export default model('Process', processdSchema);
