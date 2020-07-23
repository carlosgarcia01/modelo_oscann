import Patient from '../../models/patient.model'

export const getPatients = async () => {
  return await Patient.find();
};


