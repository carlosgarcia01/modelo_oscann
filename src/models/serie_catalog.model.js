import { Schema, model } from "mongoose";
import StudyCatalog  from './study_catalog.model'
import OscannUid  from './oscann_uid.model'
import State  from './state.model'
import User  from './user.model'

const SerieCatalogSchema = new Schema({
  id: String,
  id_study_catalog: {
    type:Schema.Types.ObjectId,
    ref:StudyCatalog,
    required:true
  },
  id_serie_catalog: {
    type:Array, 
    required:true
  },
  id_oscann_uid: {
    type:Schema.Types.ObjectId,
    ref:OscannUid,
    required:true
  },
  id_state:{
    type:Schema.Types.ObjectId,
    ref:State,
    required:true
  } ,
  retired_by:{
    type:Schema.Types.ObjectId,
    ref:User,
    required:true
  },
  name: String,
  description: String,
  duration: Number,
  diagnostic: Boolean,
  retired: Number,
  creation_date: {
    type:Date,
    default: new Date.now(),
    required:true
  },
  update_date: Date
})

export default model('SerieCatalog', SerieCatalogSchema);
