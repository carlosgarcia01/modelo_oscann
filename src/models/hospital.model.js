import { Schema, model } from "mongoose";
import HospitalGroup  from "./hospital_group.model";
import OscannUid  from "./oscann_uid.model";
import State  from "./state.model";

const hospitalSchema = new Schema({
  id_hospital:{
    type: String,
    required: true,
  },
  id_hospital_group: {
    type: Schema.Types.id_hospital_group, 
    ref: HospitalGroup, 
    required: false
  },
  id_oscann_uid:{
    type: Schema.Types.ObjectId, 
    ref: OscannUid, 
    required: false, 
  },
  id_state: { 
    type: Schema.Types.ObjectId, 
    ref: State, 
    required: false,
  },
  name: String,
  address: String,
  telephone: String,
  postal_code: String,
  description: String,
  country: String,
  city: String,
  province: String,
  latitude: String,
  length: String,
  creation_date: {
    type: Date,
    default: Date.now(),
  },
  update_date: Date,
  updated:{
    type:Boolean,
    default:false,
    required:false
  }
})

export default model('Hospital', hospitalSchema);
