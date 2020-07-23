import { Schema, model } from "mongoose";
import Study from './study.model';
import PatientDemographic from "./patient_demographics";
import State from './state.model';
import Hospital from './hospital.model';

const PatientSchema = new Schema({
  id_global_patient:  {
    type: String,
    required:true,
  },
  update_date: Date,
  id_local_patient: {
    type: String,
    required:true,
  },

  id_estudy: [{
    type: Schema.Types.ObjectId,
    ref: 'Study',
    required: false
  }],
  id_PatientDemographic: {
    type: Schema.Types.ObjectId,
    ref: 'PatientDemographic',
    required: false
  },
  id_state: {
    type: Schema.Types.ObjectId,
    ref:'State',
    required:false,
  },
  id_hospital: {
    type: Schema.Types.ObjectId,
    ref: 'Hospital',
    required:false,
  },
  creation_date: {
    type: Date,
    default: Date.now(),
    required:true,
  },  
  updated:{
    type:Boolean,
    default:false,
    required:false
  }
});

export default model('Patient', PatientSchema);
