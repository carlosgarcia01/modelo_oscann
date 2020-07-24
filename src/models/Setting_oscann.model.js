import { Schema, model } from 'mongoose';

const SettingOscannSchema = new Schema({
  resolution: String,
  distance: String,
  width: String,
  subject: String,
  lib_tracker: String,
  crtime: String,
  uid_oscann: {
    type: Schema.Types.ObjectId,
    ref: 'OscannUid',
  },
  id_state: {
    type: Schema.Types.ObjectId,
    ref: 'State',
    required: false,
  },
  updated: {
    type: Boolean,
    default: false,
    required: false,
  },
});

export default model('SettingOscann', SettingOscannSchema);
