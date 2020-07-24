import { Schema, model } from 'mongoose';

const PatientDemographicSchema = new Schema({
  name: String,
  last_name: String,
  address: String,
  personal_number: String,
  emergency_name: String,
  emergency_number: String,
  update_date: Date,
  id_Patient_local: {
    type: String,
    required: true,
    unique: true,
  },
  id_hospital: {
    type: Schema.Types.ObjectId,
    ref: 'Hospital',
    required: false,
  },
  id_state: {
    type: Schema.Types.ObjectId,
    ref: 'State',
    required: false,
  },
  email: {
    type: String,
    unique: true,
    required: false,
  },
  creation_date: {
    type: Date,
    default: Date.now(),
    required: true,
  },
});

export default model('DataPatientDemographic', PatientDemographicSchema);
