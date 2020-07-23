import { Schema, model } from "mongoose";
import State from './state.model';
import Hospital from './hospital.model'

const PatientDemographicSchema = new Schema({
  name: String,
  last_name: String,
  date_of_birth: Date,
  gender: String,
  address: String,
  personal_number: String,
  emergency_name: String,
  emergency_number: String,
  update_date: Date,
  id_PatientDemographic: {
    type: String,
    required:true,
  },
  id_hospital: {
    type: Schema.Types.ObjectId,
    ref: Hospital,
    required: false,
  },
  id_state: {
    type: Schema.Types.id_state,
    ref: State,
    required: false,
  },
  email: {
    type: String,
    unique:true,
    required:false,
  },
  creation_date: {
    type: Date,
    default: new Date.now(),
    required:true,

  },
});

export default model('PatientDemographic', PatientDemographicSchema);
