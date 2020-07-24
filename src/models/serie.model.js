import { Schema, model } from 'mongoose';

const SerieSchema = new Schema({
  update_date: Date,
  completion_date: Date,
  finish_time: Date,
  duration: Number,
  video: String,
  observation: String,
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
  gazx: String,
  time: String,
  id_global_serie: {
    type: String,
    required: true,
  },
  id_user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: false,
  },
  id_serie_catalog: {
    type: Schema.Types.ObjectId,
    ref: 'Serie_catalog',
    required: false,
  },
  id_oscann: {
    type: Schema.Types.ObjectId,
    ref: 'Oscann',
    required: false,
  },
  id_study: {
    type: Schema.Types.ObjectId,
    ref: 'Study',
    required: false,
  },
  id_state: {
    type: Schema.Types.ObjectId,
    ref: 'State',
    required: false,
  },
  serie: {
    type: Boolean,
    default: true,
    required: false,
  },
  creation_date: {
    type: Date,
    default: Date.now(),
    required: false,
  },
  start_time_serie: {
    type: Date,
    default: Date.now(),
    required: false,
  },
  updated: {
    type: Boolean,
    default: false,
    required: false,
  },
});

export default model('Serie', SerieSchema);
