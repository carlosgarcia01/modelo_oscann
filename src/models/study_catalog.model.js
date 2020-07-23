import { Schema, model } from "mongoose";
import State from './state.model';
import OscannUid from './oscann_uid.model'
import User from './user.model'
const StudyCatalogSchema = new Schema({
  id: String,
  series:{
    type:Array,
    required:true
  },
  id_oscann_uid: {
    type:Schema.Types.ObjectId,
    ref:OscannUid,
    required:false
  },
  name: String,
  description: String,
  duration: Number,
  id_state:{
    type:Schema.Types.ObjectId,
    ref:State,
    required:false
  } ,
  creation_date: {
    type:Date,
    default: new Date.now(),
    required:false
  },
  update_date: Date,
  retired: Number,
  retired_by:{
    type:Schema.Types.ObjectId,
    ref:User,
    required: false,
  },
  diagnostic:Boolean,
  updated:{
    type:Boolean,
    default:false,
    required:false
  }
  
})

export default model('StudyCatalog', StudyCatalogSchema);


