import PatientDemographic from "../../models/patient_demographics.model";

export const deletePatientDemographics = async (id_patientDemographics) => {
  return await PatientDemographic.findByIdAndDelete(id_patientDemographics);
};
