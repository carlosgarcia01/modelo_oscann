import StudyCatalog from '../../models/study_catalog.model'

export  const updateStudyCatalog = async (id, studyCatalog,) => {
  return await StudyCatalog.findByIdAndUpdate(id, studyCatalog, { new: true });
};

export  const updatePatientIdGlobal = async (patient) => {
  return await Patient.findOneAndUpdate({ "id_global_patient":id }, patient, { new: true });
};
