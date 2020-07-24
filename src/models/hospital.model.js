import { Schema, model } from 'mongoose';

const HospitalSchema = new Schema({
  name: String,
  address: String,
  telephone: String,
  postal_code: String,
  description: String,
  country: String,
  city: String,
  province: String,
  latitude: String,
  longitude: String,
  update_date: Date,
  hosts_number: Number,
  id_hospital: {
    type: String,
    required: true,
    unique: true,
  },
  id_hospital_group: {
    type: Schema.Types.ObjectId,
    ref: 'HospitalGroup',
    required: false,
  },
  id_oscann_uid: {
    type: Schema.Types.ObjectId,
    ref: 'OscannUid',
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
  },
  updated: {
    type: Boolean,
    default: false,
    required: false,
  },
});

export default model('Hospital', HospitalSchema);
