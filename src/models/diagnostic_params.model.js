import { Schema, model } from "mongoose";

const DiagnosticParamsSchema = new Schema({
  name: String,
  description: String,
  conclusion: String,
  update_date: Date,
  id_type_result: {
    type: Schema.Types.ObjectId, 
    ref: 'TypeResult', 
    required: false,
  },
  id_study_catalog: {
    type: Schema.Types.ObjectId, 
    ref: 'StudyCatalog', 
    required: false,
  },
  id_state: { 
    type: Schema.Types.ObjectId, 
    ref: 'State', 
    required: false, 
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

export default model('DiagnosticParams', DiagnosticParamsSchema);
