import { Schema, model } from "mongoose";
import User from './user.model';
import State from './state.model';

const oscannUidSchema = new Schema({
  uid_oscann:{
    type: String,
    required: true,
  },
  id_user: {
    type: Schema.Types.ObjectId, 
    ref: User, 
    required: true, 
  },
  id_state: { 
    type: Schema.Types.ObjectId, 
    ref: State, 
    required: true, 
  },
  name: {
    type: String,
    required: true
  },
  instalation_date: {
    type: String,
    required: false,
  },
  version: {
    type: String,
    required: false,
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

export default model('OscannUid', oscannUidSchema);
