import { Schema, model } from "mongoose";
import State from './state.model'
import User from './state.model'
import StudyCatalog from './study_catalog.model'
import ReasonCancellation from './reason_cancellation.model'

const StudySchema = new Schema({
  id_local: String,
  id_global: String,
  id_study_catalog: {
    type: Schema.Types.ObjectId,
    ref: StudyCatalog,
    required: false,
  },
  id_user: {
    type: Schema.Types.ObjectId,
    ref: User,
    required: false,
  },
  id_state: {
    type: Schema.Types.ObjectId,
    ref: State,
    required: false,
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
  cancelled:{
    flat:Boolean,
    reason:{
      type: Schema.Types.ObjectId,
      ref: ReasonCancellation,
      required:false,
    },
  },
  update_date: Date,
  medical_appointment:Date,
  updated:{
    type:Boolean,
    default:false,
    required:false
  }
})


export default model('Study', StudySchema);
