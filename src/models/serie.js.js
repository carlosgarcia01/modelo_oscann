import { Schema, model } from "mongoose";
import User from './user.model'
import Serie_catalog from './serie_catalog.model'
import Oscann from './oscann_uid.model'
import Study from './study.model'
import State from './state.model'

const SerieSchema = new Schema({
  id_global_serie: {
    type:String,
    required:true
  },
  id_user:{
    type:Schema.Types.ObjectId,
    ref:User,
    required:true 
  } ,
  id_serie_catalog: {
    type:Schema.Types.ObjectId,
    ref:Serie_catalog,
    required:true 
  },
  id_oscann: {
    type:Schema.Types.ObjectId,
    ref:Oscann, 
    required:true 
  },
  id_study: {
    type:Schema.Types.ObjectId,
    ref:Study,
    required:true 
  },
  id_state:{
    type:Schema.Types.ObjectId,
    ref:State,
    required:true 
  },
  serie:{type:Boolean,default:false,required:false},
  creation_date: {type:Date,default: new Date.now(),required:false},
  update_date:{type:Date,required:false} ,
  start_time: {type:Date,default: new Date.now(),required:false},
  finish_time: {type:Date,default: new Date.now(),required:false},
  duration: {type:Date,default: new Date.now(),required:false},
  video: {type:String,required:false},
  observation:{type:String,required:false},
  valid: {type:String,required:false},
  blinks: {type:String,required:false},
  gazy_rawx: {type:String,required:false},
  gazy_rawy: {type:String,required:false},
  pupilArea: {type:String,required:false},
  errory: {type:String,required:false},
  errorx: {type:String,required:false},
  gazxBey: {type:String,required:false},
  gazxBeX: {type:String,required:false},
  stimuluy: {type:String,required:false},
  stimulux: {type:String,required:false},
  gazy: {type:String,required:false},
  gazx:{type:String,required:false} ,
  time: {type:String,required:false}
})

export default model('Serie', SerieSchema);


