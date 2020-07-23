import Patient from '../../models/patient.model'

export  const updatePatient = async (id, patient,) => {
  return await Patient.findByIdAndUpdate(id, patient, { new: true });
};

export  const updatePatientIdGlobal = async (patient) => {
  return await Patient.findOneAndUpdate({ "id_global_patient":id }, patient, { new: true });
};
