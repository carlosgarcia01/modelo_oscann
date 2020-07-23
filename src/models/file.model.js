import { Schema, model } from "mongoose";
import {  } from "./";

const fileSchema = new Schema({
  id_file:{
    type: String,
    required: true,
  },
  id_serie:{
    type: Schema.Types.ObjectId, 
    ref: Serie, 
    required: true, 
  },
  id_pacient:{
    type: Schema.Types.ObjectId, 
    ref: Pacient, 
    required: true, 
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
  protect_file:{
    type: String,
    required: false,
  },
  exist:{
    type: Boolean,
    required: false,
  },
  url_file_path:{
    type: String,
    required: true,
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

export default model('File', fileSchema);
