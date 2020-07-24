import { Schema, model } from 'mongoose';

const SettingHostSchema = new Schema({
  host_name: String,
  port_mac: String,
  port: String,
  uri: String,
  public_ip: String,
  departament: String,
  root_path_file: String,
  limited_upper: Number,
  limited_lower: Number,
  available_capacity: Number,
  storage_available: Number,
  delete_concurrency: Number,
  update_date: Date,
  deleted_date: Date,
  id_computer_ae: {
    type: String,
    required: true,
  },
  id_hospital: {
    type: Schema.Types.ObjectId,
    ref: 'Hospital',
    required: false,
  },
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
  id_oscann: {
    type: Schema.Types.ObjectId,
    ref: 'OscannUid',
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

export default model('SettingHost', SettingHostSchema);
