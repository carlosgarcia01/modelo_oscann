import { Schema, model } from "mongoose";
import Study  from './study.model';
import PatientDemographic from "./patient_demographics";
import State  from './state.model';
import Hospital  from './hospital.model';

const PatientSchema = new Schema({
  id_local_patient: {
    type: String,
    required:true,
  },
  id_global_patient: String,
  id_estudy: {
    type: Schema.Types.ObjectId,
    ref: Study,
    required: false
  },
  id_PatientDemographic: {
    type: Schema.Types.ObjectId,
    ref: PatientDemographic,
    required: false
  },
  id_state: {
    type: Schema.Types.id_state,
    ref:State,
    required:false,
  },
  list_ids_patient:[String],
  id_hospital: {
    type: Schema.Types.ObjectId,
    ref: Hospital,
    required:false,

  },
  creation_date: {
    type: Date,
    default: new Date.now(),
    required:true,

  },
  update_date: Date,
  updated:{
    type:Boolean,
    default:false,
    required:false
  }
});

export default model('Patient', PatientSchema);
