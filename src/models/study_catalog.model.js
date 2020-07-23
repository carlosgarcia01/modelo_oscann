import { Schema, model } from "mongoose";
import State from './state.model';
import OscannUid from './oscann_uid.model';
import User from './user.model';
import Serie from './serie.model';

const StudyCatalogSchema = new Schema({
  name: String,
  description: String,
  duration: Number,
  diagnostic:Boolean,
  update_date: Date,
  retired:Number,
  series:[{
    type:Schema.Types.ObjectId,
    ref:Serie,
    required:true
  }],
  id_oscann_uid: {
    type:Schema.Types.ObjectId,
    ref:OscannUid,
    required:false
  },
  id_state:{
    type:Schema.Types.ObjectId,
    ref:State,
    required:false
  },
  creation_date: {
    type:Date,
    default: new Date.now(),
    required:false
  },
  id_user:{
    type:Schema.Types.ObjectId,
    ref:User,
    required: false,
  },
  retired_by:{
    type:Schema.Types.ObjectId,
    ref:User,
    required: false,
  },
  updated:{
    type:Boolean,
    default:false,
    required:false
  }
})

export default model('StudyCatalog', StudyCatalogSchema);
