import PatientDemographic from "../../models/patient_demographics.model";

export const getPatientDemographicsById = async (id) => {
  const patientDemographicsReturn = await PatientDemographic.findById(id);
  return patientDemographicsReturn;
};
