import { Schema, model } from "mongoose";
import TypeResult from './result_type.model';
import StudyCatalog from './study_catalog.model';
import State from './state.model';

const DiagnosticParamsSchema = new Schema({
  name: String,
  description: String,
  conclusion: String,
  id_type_result: {
    type: Schema.Types.ObjectId, 
    ref: TypeResult, 
    required: false,
  },
  id_study_catalog: {
    type: Schema.Types.ObjectId, 
    ref: StudyCatalog, 
    required: false,
  },
  id_state: { 
    type: Schema.Types.ObjectId, 
    ref: State, 
    required: false, 
  },
  creation_date: {
    type: Date,
    default: new Date.now(),
  },
  update_date: Date,
  updated:{
    type:Boolean,
    default:false,
    required:false
  }
})

export default model('DiagnosticParams', DiagnosticParamsSchema);
