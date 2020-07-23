const mongoose = require('mongoose');

// eslint-disable-next-line import/newline-after-import
import Diagnostic_params from './diagnostic_params.models'
import Study from './diagnostic_params.models'
import Result_type from './diagnostic_params.models'
import State from './diagnostic_params.models'
const { Schema } = mongoose;

const DiagnosticSchema = new Schema({
  _id_global_diagnosis:{
    type:String,
    required:true
  },
  id_study:{
    type:Schema.Types.ObjectId,
    ref:Study,
    required:true
  },
  id_result_type:{
    type:Schema.Types.ObjectId,
    ref:Result_type,
    required:true
  },
  id_params_diagnosis:{
    type:Schema.Types.ObjectId,
    ref:Diagnostic_params,
    required:false
  },
  id_state:{
    type:Schema.Types.ObjectId,
    ref:State,
    required:true
  },
  name:{
    type:String,
    required:true
  },
  description:{
    type:String,
    required:false
  },
  results:{
    type:Array,
    required:false
  },
  diagnostic: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model('Diagnostic', DiagnosticSchema);
