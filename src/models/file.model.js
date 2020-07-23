import { Schema, model } from "mongoose";
import Serie from "./serie.js";
import Patient from "./Patient.model";
import OscannUid from "./oscann_uid.model";
import State from "./state.model";

const FileSchema = new Schema({
  id_file:{
    type: String,
    required: true,
  },
  id_serie:{
    type: Schema.Types.ObjectId, 
    ref: Serie, 
    required: false, 
  },
  id_patient:{
    type: Schema.Types.ObjectId, 
    ref: Patient, 
    required: false, 
  },
  id_oscann_uid:{
    type: Schema.Types.ObjectId, 
    ref: OscannUid, 
    required: false, 
  },
  id_state: { 
    type: Schema.Types.ObjectId, 
    ref: State, 
    required: true 
  },
  protect_file: String,
  exist:Boolean,
  url_file_path:{
    type:String,
    required:true
  },
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

export default model('File', FileSchema);
