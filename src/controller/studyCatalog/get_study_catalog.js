import StudyCatalog from '../../models/study_catalog.model'

export const getStudyCatalogByIdLocal = async (id) => {
  return await StudyCatalog.findById(id);;
};

export const getPatientIdGlobal = async (id) => {
  const patientReturn = await Patient.findOne({ "id_global_patient":id });
  return patientReturn;
};
