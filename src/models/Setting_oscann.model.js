import { Schema, model } from 'mongoose';

const SettingOscannSchema = new Schema({
  resolution: String,
  distance: String,
  width: String,
  lib_tracker: String,
  crtime: String,
  id_user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: false,
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
