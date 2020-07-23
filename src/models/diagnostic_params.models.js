import { Schema, model } from "mongoose";
import TypeResult from './result_type.model';
import StudyCatalog from './study_catalog.model';
import State from './state.model';


const diagnosticParamsSchema = new Schema({
  id_diagnostic_params:{
    type: String,
    required: true,
  },
  id_type_result:{
    type: Schema.Types.ObjectId, 
    ref: TypeResult, 
    required: true,
  },
  id_study_catalog: {
    type: Schema.Types.ObjectId, 
    ref: StudyCatalog, 
    required: true,
  },
  id_state: { 
    type: Schema.Types.ObjectId, 
    ref: State, 
    required: true 
  },
  name:{
    type: String,
    required: true,
  },
  description:{
    type: String,
    required: false,
  },
  conclusion:{
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
})

export default model('DiagnosticParams', diagnosticParamsSchema);
