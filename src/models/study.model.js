import { Schema, model } from "mongoose";
import State from './state.model'
import User from './state.model'
import StudyCatalog from './study_catalog.model'

const StudySchema = new Schema({
  id_local: String,
  id_global: String,
  id_study_catalog: {
    type: Schema.Types.ObjectId,
    ref: StudyCatalog,
    required: true,
  },
  id_user: {
    type: Schema.Types.ObjectId,
    ref: User,
    required: true,
  },
  id_state: {
    type: Schema.Types.ObjectId,
    ref: State,
    required: true,
  },
  description: String,
  series:[{
    id_calibration:{type:String,required:true},
    series:[String]
  }],
  creation_date: {
    type: Date,
    default: new Date.now(),
    required: false
  }, 
  update_date: Date,
})


export default model('State', StudySchema);
