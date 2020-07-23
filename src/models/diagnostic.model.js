import { Schema, model } from "mongoose";
import Diagnostic_params from './diagnostic_params.models'
import Study from './study.model'
import Result_type from './result_type.model'
import State from './state.model'

const DiagnosticSchema = new Schema({
  _id_global_diagnostic:{
    type:String,
    required:true
  },
  id_study:{
    type:Schema.Types.ObjectId,
    ref:Study,
    required:false,
  },
  id_result_type:{
    type:Schema.Types.ObjectId,
    ref:Result_type,
    required:false,
  },
  id_diagnostic_params:{
    type:Schema.Types.ObjectId,
    ref:Diagnostic_params,
    required:false,
  },
  id_state:{
    type:Schema.Types.ObjectId,
    ref:State,
    required:false,
  },
  results:[Number],
  name:String,
  description:String,
  diagnostic:String,
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
});

export default model('Diagnostic', DiagnosticSchema);
