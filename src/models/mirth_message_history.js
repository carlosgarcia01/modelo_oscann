import { Schema, model } from "mongoose";
import State from "./state.model";
import Hospital from "./hospital.model";
import Patient from "./Patient.model";
import Study from "./study.model";

const MirthMessageHistorySchema = new Schema({
  update_date: Date,
  Data_Mirth_Message:{},
  id_hospital: {
    type: Schema.Types.ObjectId, 
    ref: Hospital, 
    required: false,  
  },
  id_patient: {
    type: Schema.Types.ObjectId, 
    ref: Patient, 
    required: false,  
  },
  id_study: {
    type: Schema.Types.ObjectId, 
    ref: Study, 
    required: false,  
  },
  id_state: { 
    type: Schema.Types.ObjectId, 
    ref: State, 
    required: false, 
  },
  creation_date: {
    type: Date,
    default: Date.now(),
    required: true,
  },
  updated:{
    type:Boolean,
    default:false,
    required:false
  }
})

export default model('MirthHistory', MirthMessageHistorySchema);
