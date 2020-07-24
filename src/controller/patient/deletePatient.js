import Patient from '../../models/patient.model';

export const deletePatient = async (idPatient) => {
  const patientDeleted = await Patient.findByIdAndDelete(idPatient);
  return patientDeleted;
};

export const deletePatientIdGlobal = async (idPatient) => {
  const patientDeleted = await Patient.deleteOne({ id_global_patient: idPatient });
  return patientDeleted;
};
