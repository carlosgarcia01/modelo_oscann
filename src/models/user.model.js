import { Schema, model } from "mongoose";
import State from './state.model';
import Hospital from './hospital.model';
import UserType from './user_type.model';

const UserSchema = new Schema({
  id_user:{
    type: String,
    required: true,
  },
  id_user_type: {
    type: Schema.Types.ObjectId,
    ref: UserType,
    required: false,
  },
  id_hospital: {
    type: Schema.Types.ObjectId,
    ref: Hospital,
    required: true,
  },
  id_state: {
    type: Schema.Types.ObjectId, 
    ref: State,
    required: false,
  },
  name: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: String,
  contact_number: String,
  last_login_date: Date,
  creation_date: {
    type: Date,
    required: true,
    default: new Date.now(),
  },
  update_date: Date,
  updated:{
    type:Boolean,
    default:false,
    required:false,
  }
})

export default model('User', UserSchema);
