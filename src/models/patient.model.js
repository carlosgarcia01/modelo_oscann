import { Schema, model } from 'mongoose';

const PatientSchema = new Schema({
  update_date: Date,
  date_of_birth: Date,
  gender: String,
  id_global_patient: {
    type: String,
    required: true,
    unique: true,
  },
  id_local_patient: {
    type: String,
    required: true,
  },

  id_estudy: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Study',
      required: false,
    },
  ],
  id_state: {
    type: Schema.Types.ObjectId,
    ref: 'State',
    required: false,
  },
  id_hospital: {
    type: Schema.Types.ObjectId,
    ref: 'Hospital',
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

export default model('Patient', PatientSchema);
