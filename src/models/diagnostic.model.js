import { Schema, model } from "mongoose";

const DiagnosticSchema = new Schema({
  name:String,
  results:[Number],
  diagnostic:String,
  description:String,
  update_date: Date,
  id_global_diagnostic:{
    type:String,
    required:true,
    unique:true,
  },
  id_study:{
    type:Schema.Types.ObjectId,
    ref:'Study',
  },
  id_result_type:{
    type:Schema.Types.ObjectId,
    ref:'Result_type',
  },
  id_diagnostic_params:{
    type:Schema.Types.ObjectId,
    ref:'Diagnostic_params',
  },
  id_state:{
    type:Schema.Types.ObjectId,
    ref:'State',
  },
  creation_date: {
    type: Date,
    default: Date.now(),
  },
  updated:{
    type:Boolean,
    default:false,
  }
});

export default model('Diagnostic', DiagnosticSchema);
