import { Schema, model } from "mongoose";
import State from './state.model';
import OscannUid from './oscann_uid.model'
const StudyCatalogSchema = new Schema({
  id: String,
  series:{
    type:Array,
    required:true
  },
  id_oscann_uid: {
    type:Schema.Types.ObjectId,
    ref:OscannUid,
    required:true
  },
  name: String,
  description: String,
  duration: Number,
  id_state:{
    type:Schema.Types.ObjectId,
    ref:State,
    required:true
  } ,
  creation_date: {
    type:Date,
    default: new Date.now(),
    required:true
  },
  update_date: Date,
  retired: Number,
  retired_by: Number,
  diagnostic:Boolean
  
})

export default model('StudyCatalog', StudyCatalogSchema);


