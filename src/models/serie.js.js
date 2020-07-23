import { Schema, model } from "mongoose";
import User from './user.model'
import Serie_catalog from './serie_catalog.model'
import Oscann from './oscann_uid.model'
import Study from './study.model'
import State from './state.model'

const SerieSchema = new Schema({
  id_global_serie: {
    type: String,
    required: true
  },
  id_user: {
    type: Schema.Types.ObjectId,
    ref: User,
    required: false 
  } ,
  id_serie_catalog: {
    type: Schema.Types.ObjectId,
    ref: Serie_catalog,
    required: false 
  },
  id_oscann: {
    type: Schema.Types.ObjectId,
    ref: Oscann, 
    required: false 
  },
  id_study: {
    type:Schema.Types.ObjectId,
    ref:Study,
    required:false 
  },
  id_state:{
    type:Schema.Types.ObjectId,
    ref:State,
    required:false 
  },
  serie:{type:Boolean,default:false,required:false},
  creation_date: {type:Date,default: new Date.now(),required:false},
  update_date:Date ,
  completion_date:Date,
  start_time: {type:Date,default: new Date.now(),required:false},
  updated:{
    type:Boolean,
    default:false,
    required:false
  },
  finish_time:Date,
  duration: Number,
  video: String,
  observation:String,
  valid: String,
  blinks: String,
  gazy_rawx: String,
  gazy_rawy: String,
  pupilArea: String,
  errory: String,
  errorx: String,
  gazxBey: String,
  gazxBeX: String,
  stimuluy: String,
  stimulux: String,
  gazy: String,
  gazx:String ,
  time: String
})

export default model('Serie', SerieSchema);


