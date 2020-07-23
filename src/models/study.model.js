import { Schema, model } from "mongoose";
import State from './state.model';
import User from './state.model';
import StudyCatalog from './study_catalog.model';
import ReasonCancellation from './reason_cancellation.model';

const StudySchema = new Schema({
  update_date: Date,
  medical_appointment_date:Date,
  description: String,
  id_local: {
    type: String,
    required: true,
    unique: true,
  },
  id_global: {
    type: String,
    required: true,
    unique: true,
  },
  id_study_catalog: {
    type: Schema.Types.ObjectId,
    ref: StudyCatalog,
    required: false,
  },
  id_user: {
    type: Schema.Types.ObjectId,
    ref: User,
    required: true,
  },
  id_state: {
    type: Schema.Types.ObjectId,
    ref: State,
    required: false,
  },
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
  updated:{
    type:Boolean,
    default:false,
    required:false
  }
})

export default model('Study', StudySchema);
