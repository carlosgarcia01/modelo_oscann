import { Schema, model } from "mongoose";
import Hospital from "./hospital.model";
import User from './user.model'
import State from "./state.model";
import OscannUid from "./oscann_uid.model";

const AESchema = new Schema({
  id_computer_ae:{
    type: String,
    required: true
  },
  id_hospital:{
    type: Schema.Types.id_hospital, 
    ref: Hospital, 
    required: true 
  },
  id_user:{
    type: Schema.Types.id_user, 
    ref: User, 
    required: true 
  },
  id_state: { 
    type: Schema.Types.id_state, 
    ref: State, 
    required: true 
  },
  id_oscann:{
    type: Schema.Types.id_oscann, 
    ref: OscannUid, 
    required: true 
  },
  host_name: {
    type: String,
    requiered: true,
  },
  port_mac: {
    type: String,
    requiered: true,
  },
  port:{
    type: String,
    requiered: false,
  },
  uri: {
    type: String,
    requiered: true,
  },
  departament: {
    type: String,
    requiered: true,
  },
  vendor_data: {
    type: String,
    requiered: true,
  },
  ae_group: {
    type: String,
    requiered: true,
  },
  creation_date: {
    type: Date,
    default: new Date.now(),
    required: true,
  },
  update_date: {
    type: Date,
    required: false,
  },
})

export default model('AE', AESchema);
