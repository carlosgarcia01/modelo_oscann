import { Schema, model } from "mongoose";
import State from "./state.model";
import Hospital from "./hospital.model";
import Patient from "./Patient.model";
import Study from "./study.model";

const wmlHistorySchema = new Schema({
    id_wml:{
    type: String,
    required: true,
  },
  id_hospital: {
    type: Schema.Types.ObjectId, 
    ref: Hospital, 
    required: true,  
  },
  id_patient: {
    type: Schema.Types.ObjectId, 
    ref: Patient, 
    required: true,  
  },
  id_study: {
    type: Schema.Types.ObjectId, 
    ref: Study, 
    required: true,  
  },
  id_state: { 
    type: Schema.Types.ObjectId, 
    ref: State, 
    required: true, 
  },
  name: {
    type: String,
    required: false,
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
  Data_Mirth_Message:{
    "por definir"
  },
})

export default model('WMLHistory', wmlHistorySchema);
