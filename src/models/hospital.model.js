import { Schema, model } from "mongoose";
import HospitalGroup  from "./hospital_group.model";
import UidOscann  from "./oscann_uid.model";
import State  from "./state.model";

const hospitalSchema = new Schema({
  id_hospital:{
    type: String,
    required: true,
  },
  id_hospital_group: {
    type: Schema.Types.id_hospital_group, 
    ref: HospitalGroup, 
    required: true
  },
  id_oscann_uid:{
    type: Schema.Types.ObjectId, 
    ref: UidOscann, 
    required: true, 
  },
  id_state: { 
    type: Schema.Types.ObjectId, 
    ref: State, 
    required: true 
  },
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: false,
  },
  telephone: {
    type: String,
    required: true,
  },
  postal_code: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  country: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  province: {
    type: String,
    required: false,
  },
  latitude: {
    type: String,
    required: false,
  },
  length: {
    type: String,
    requiered: false,
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

export default model('Hospital', hospitalSchema);
