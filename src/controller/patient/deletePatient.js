import Patient from '../../models/patient.model'

export const deletePatient = async (id_patient) => {
  return await Patient.findByIdAndDelete(id_patient)
};

export const deletePatientIdGlobal = async (id_patient) => {
  return await Patient.deleteOne({ "id_global_patient":id_patient })
};
