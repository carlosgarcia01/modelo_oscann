import PatientDemographic from "../../models/patient_demographics.model";

export const updatePatientDemographic = async (id, patientDemographic) => {
  return await PatientDemographic.findByIdAndUpdate(id, patientDemographic, {
    new: true,
  });
};
