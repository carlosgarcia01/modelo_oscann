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
    required:true,
  },
  description:{
    type:String,
    required:false
  },
  creation_date:{
    type:Date,
    default: new Date.now(),
    required:true
  },
  update_date:{
    type:Date,
    required:true
  },
})

export default model('ReasonCancellation', ReasonCancellationSchema);
