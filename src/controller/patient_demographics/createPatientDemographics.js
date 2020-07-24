import PatientDemographic from "../../models/patient_demographics.model";

const createPatientDemographics = async (patientDemographicsObj) => {
  const newPatientDemographics = new PatientDemographic(patientDemographicsObj);
  const patientDemographicsReturn = await newPatientDemographics.save();
  return patientDemographicsReturn;
};

export default createPatientDemographics;
