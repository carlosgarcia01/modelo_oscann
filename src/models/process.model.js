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
    required: true, 
  },
  description: {
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

export default model('Process', processdSchema);
