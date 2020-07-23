import { Schema, model } from "mongoose";
import StudyCatalog  from './study_catalog.model'
import OscannUid  from './oscann_uid.model'
import State  from './state.model'
import User  from './user.model'

const SerieCatalogSchema = new Schema({
  id_serie_catalog: {
    type: String,
    required:true,
  },
  id_study_catalog: {
    type: Schema.Types.ObjectId,
    ref: StudyCatalog,
    required: false,
  },
  uid_oscann: {
    type:Schema.Types.ObjectId,
    ref:OscannUid,
    required:false
  },
  id_state:{
    type:Schema.Types.ObjectId,
    ref:State,
    required: false,
  } ,
  retired_by:{
    type:Schema.Types.ObjectId,
    ref:User,
    required: false,
  },
  name: String,
  description: String,
  duration: Number,
  diagnostic: Boolean,
  retired: Number,
  creation_date: {
    type:Date,
    default: new Date.now(),
  },
  update_date: Date,
  updated:{
    type:Boolean,
    default:false,
    required:false
  }
})

export default model('SerieCatalog', SerieCatalogSchema);
