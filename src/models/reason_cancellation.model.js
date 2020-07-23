import { Schema, model } from "mongoose";
import State from './state.model';

const ReasonCancellationSchema = new Schema({
  id_reason_cancellation:{
    type:String,
    required:true,
  },
  id_state:{
    type:Schema.Types.ObjectId,
    ref:State,
    required:false,
  },
  description:String,
  creation_date:{
    type:Date,
    default: new Date.now(),
    required:true
  },
  update_date: Date,
  updated:{
    type:Boolean,
    default:false,
    required:false
  }
})

export default model('ReasonCancellation', ReasonCancellationSchema);
