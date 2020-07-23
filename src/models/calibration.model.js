import { Schema, model } from "mongoose";
import State from "./state.model";
import Study from "./study.model";
import Result_type from "./result_type.model";
import Diagnostic_params from "./diagnostic_params.models";
import Study from "./study.model";
const calibrationSchema = new Schema({
  _id_global_diagnosis:{
    type: String,
    required:true
  },
  id_study:{
    type: Schema.Types.ObjectId,
    ref:Study,
    required:true
  },
  id_result_type:{
    type: Schema.Types.ObjectId,
    ref:Result_type,
    required:true
  },
  id_parameters_diagnosis:{
    type: Schema.Types.ObjectId,
    ref:Diagnostic_params,
    required:true
  },
  id_state:{
    type: Schema.Types.ObjectId,
    ref:State,
    required:true
  },
  name:{
    type:String,
    required:false
  },
  description:{
    type:String,
    required:false
  },
  output_result:{
    type:String,
    required:false
  },
  result:{
    type:String,
    required:false
  },
})

export default model('Calibration', calibrationSchema);
