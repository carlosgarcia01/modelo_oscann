import Patient from '../../models/patient.model';

export const updatePatient = async (id, patient) => {
  const patientUpdated = await Patient.findByIdAndUpdate(id, patient, { new: true });
  return patientUpdated;
};

export const updatePatientIdGlobal = async (id, patient) => {
  const patientUpdated = await Patient.findOneAndUpdate({ id_global_patient: id }, patient, {
    new: true,
  });
  return patientUpdated;
};
