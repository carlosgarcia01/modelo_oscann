import { Schema, model } from 'mongoose';

const LogSchema = new Schema({
  description: String,
  update_date: Date,
  id_process: {
    type: Schema.Types.ObjectId,
    ref: 'Process',
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
    type: String,
    default: Date.now(),
    required: false,
  },
  updated: {
    type: Boolean,
    default: false,
    required: false,
  },
});

export default model('Log', LogSchema);
