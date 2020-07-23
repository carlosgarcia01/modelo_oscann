import { Schema, model } from "mongoose";
import Serie from "./serie.js";
import Patient from "./Patient.model";
import OscannUid from "./oscann_uid.model";
import State from "./state.model";

const FileSchema = new Schema({
  protect_file: Boolean,
  exist:Boolean,
  update_date: Date,
  id_serie:{
    type: Schema.Types.ObjectId,
    ref: 'Serie', 
    required: false, 
  },
  id_patient:{
    type: Schema.Types.ObjectId, 
    ref: 'Patient', 
    required: false, 
  },
  id_oscann_uid:{
    type: Schema.Types.ObjectId, 
    ref: 'OscannUid', 
    required: false, 
  },
  id_state: { 
    type: Schema.Types.ObjectId, 
    ref: 'State', 
    required: true 
  },
  url_file_path:{
    type:String,
    required:false
  },
  creation_date: {
    type: Date,
    default: Date.now(),
  },
  updated:{
    type:Boolean,
    default:false,
    required:false
  }
})

export default model('File', FileSchema);
