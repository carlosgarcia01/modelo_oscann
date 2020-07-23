const mongoose = require('mongoose');

// eslint-disable-next-line import/newline-after-import
import  Study  from './study.model'
import  State  from './state.model'

const { Schema } = mongoose;

const PatientSchema = new Schema({

  id_local_patient: {
    type: String,
    required:true,
  },
  id_estudy: {
    type: Schema.Types._id_local,
    ref: Study,
    required: false
    
  },
  id_state: {
    type: Schema.Types.id_state,
    ref:State,
    required:false,
  },
  id_global_patient: {
    type: String,
    required:true,

  },
  list_ids_patient: {
    type: Array,
    required:true,
  },
  id_hospital_group: {
    type: String,
    required:true,

  },
  name: {
    type: String,
    required:true,

  },
  last_name: {
    type: String,
    required:false,

  },
  date_of_birth: {
    type: String,
    required:false,

  },
  gender: {
    type: String,
    required:true,

  },
  email: {
    type: String,
    unique:true,
    required:true,

  },
  address: {
    type: String,
    required:false,

  },
  personal_number: {
    type: String,
    required:true,

  },
  emergency_name: {
    type: String,
    required:true,

  },
  emergency_number: {
    type: String,
    required:true,

  },
  creation_date: {
    type: Date,
    default: new Date.now(),
    required:true,

  },
  update_date: {
    type: String,
    required:false,

  },
});

module.exports = mongoose.model('Patient', PatientSchema);
