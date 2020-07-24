import PatientDemographic from "../../models/patient_demographics.model";

export const getPatientDemographicss = async () => {
  return await PatientDemographic.find();
};
