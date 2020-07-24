import { Schema, model } from 'mongoose';

const OscannUidSchema = new Schema({
  name: String,
  instalation_date: Date,
  version: String,
  update_date: Date,
  uid_oscann: {
    type: String,
    required: true,
    unique: true,
  },
  id_user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: false,
  },
  id_setting_oscann: {
    type: Schema.Types.ObjectId,
    ref: 'SettingOscann',
    required: false,
  },
  id_state: {
    type: Schema.Types.ObjectId,
    ref: 'State',
    required: false,
  },
  creation_date: {
    type: Date,
    default: Date.now(),
    required: true,
  },
  updated: {
    type: Boolean,
    default: false,
    required: false,
  },
});

export default model('OscannUid', OscannUidSchema);
