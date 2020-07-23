import { Schema, model } from "mongoose";
import User from './user.model';
import State from './state.model';

const OscannUidSchema = new Schema({
  uid_oscann:{
    type: String,
    required: true,
  },
  id_user: {
    type: Schema.Types.ObjectId, 
    ref: User, 
    required: false, 
  },
  id_state: { 
    type: Schema.Types.ObjectId, 
    ref: State, 
    required: false, 
  },
  name: String,
  instalation_date: Date,
  version: String,
  creation_date: {
    type: Date,
    default: Date.now(),
    required: true,
  },
  update_date: Date,
  updated:{
    type:Boolean,
    default:false,
    required:false
  }
})

export default model('OscannUid', OscannUidSchema);
