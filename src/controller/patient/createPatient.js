import Patient from '../../models/patient.model'

export const createPatient = async (patient) => {
  const newPatient = new Patient(patient);
  const patientReturn = await newPatient.save();
  return patientReturn;
};

