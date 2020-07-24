import Patient from '../../models/patient.model';

export const getPatientByIdLocal = async (id) => {
  const patientReturn = await Patient.findOne({ id_local_patient: id });
  return patientReturn;
};

export const getPatientIdGlobal = async (id) => {
  const patientReturn = await Patient.findOne({ id_global_patient: id });
  return patientReturn;
};
