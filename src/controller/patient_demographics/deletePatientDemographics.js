import PatientDemographic from '../../models/patient_demographics';

const deletePatientDemographics = async (idPatientDemographics) => {
  return PatientDemographic.findByIdAndDelete(idPatientDemographics);
};

export default deletePatientDemographics;
