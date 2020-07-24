import { Schema, model } from 'mongoose';

const SerieCatalogSchema = new Schema({
  name: String,
  description: String,
  is_diagnostic: Boolean,
  update_date: Date,
  uid_oscann: {
    type: Schema.Types.ObjectId,
    ref: 'OscannUid',
    required: false,
  },
  id_study_catalog: {
    type: Schema.Types.ObjectId,
    ref: 'StudyCatalog',
    required: false,
  },
  id_state: {
    type: Schema.Types.ObjectId,
    ref: 'State',
    required: false,
  },
  id_user: {
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
