import { Schema, model } from "mongoose";
import State from './state.model';

const UserTypeSchema = new Schema({
  id_user_type: {
    type: String,
    required: true,
  },
  id_state: { 
    type: Schema.Types.ObjectId, 
    ref: State, 
    required: false 
  },
  name:String,
  description:String,
  creation_date: {
    type: Date,
    default: Date.now(),
    required: false,
  },
  update_date: Date,
  updated:{
    type:Boolean,
    default:false,
    required:false
  }
})

export default model('UserType', UserTypeSchema);
