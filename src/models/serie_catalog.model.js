import { Schema, model } from 'mongoose';

const SerieCatalogSchema = new Schema({
  name: String,
  description: String,
  duration: Number,
  diagnostic: Boolean,
  retired: Number,
  update_date: Date,
  id_study_catalog: {
    type: Schema.Types.ObjectId,
    ref: 'StudyCatalog',
    required: false,
  },
  uid_oscann: {
    type: Schema.Types.ObjectId,
    ref: 'OscannUid',
    required: false,
  },
  id_state: {
    type: Schema.Types.ObjectId,
    ref: 'State',
    required: false,
  },
  retired_by: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: false,
  },
  creation_date: {
    type: Date,
    default: Date.now(),
  },
  updated: {
    type: Boolean,
    default: false,
    required: false,
  },
});

export default model('SerieCatalog', SerieCatalogSchema);
