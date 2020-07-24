import { Schema, model } from 'mongoose';

const HospitalGroupSchema = new Schema({
  name: String,
  description: String,
  update_date: Date,
  id_hospital_group: {
    type: String,
    required: true,
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

export default model('HospitalGroup', HospitalGroupSchema);
