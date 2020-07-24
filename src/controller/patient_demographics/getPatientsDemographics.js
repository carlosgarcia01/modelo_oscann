import PatientDemographic from '../../models/patient_demographics';

const getPatientDemographicss = async () => {
  return PatientDemographic.find();
};

export default getPatientDemographicss;
