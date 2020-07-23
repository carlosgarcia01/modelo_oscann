import { Schema, model } from "mongoose";
import User from './user.model';
import State from './state.model';

const OscannUidSchema = new Schema({
  name: String,
  instalation_date: Date,
  version: String,
  update_date: Date,
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
  creation_date: {
    type: Date,
    default: Date.now(),
    required: true,
  },
  updated:{
    type:Boolean,
    default:false,
    required:false
  }
})

export default model('OscannUid', OscannUidSchema);
