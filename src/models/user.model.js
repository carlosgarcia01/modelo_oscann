import { Schema, model } from "mongoose";
import State from './state.model';
import Hospital from './hospital.model';
import UserType from './user_type.model';

const UserSchema = new Schema({
  
  name: String,
  password: String,
  contact_number: String,
  last_login_date: Date,
  update_date: Date,
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
  email: {
    type: String,
    required: true,
    unique: true,
  },
  creation_date: {
    type: Date,
    required: true,
    default: new Date.now(),
  },
  updated:{
    type:Boolean,
    default:false,
    required:false,
  }
})

export default model('User', UserSchema);
