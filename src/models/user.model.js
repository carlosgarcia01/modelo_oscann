import { Schema, model } from "mongoose";
import State from './state.model'
import Hospital from './hospital.model'
import UserType from './user_type.model'

const UserSchema = new Schema({
  _id_user: String,
  id_user_type: {
    type: Schema.Types.ObjectId,
    ref: UserType,
    required: true,
  },
  id_hospital: {
    type: Schema.Types.ObjectId,
    ref: Hospital,
    required: true,
  },
  id_state: {
    type: Schema.Types.ObjectId, 
    ref: State,
    required: true,
  },
  name: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String, 
    required: true,
  },
  contact_number: String,
  last_login_date: Date,
  creation_date: {
    type: Date,
    required: true,
    default: new Date.now(),
  },
  update_date: Date,
})

export default model('User', UserSchema);



