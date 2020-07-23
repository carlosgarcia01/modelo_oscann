import { Schema, model } from "mongoose";
import State from './state.model';
import OscannUid from './oscann_uid.model';
import User from './user.model';

const StudyCatalogSchema = new Schema({
  id__catalog_study: String,
  name: String,
  description: String,
  duration: Number,
  diagnostic:Boolean,
  series:{
    type:Array,
    required:true
  },
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
  update_date: Date,
  id_user:{
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
