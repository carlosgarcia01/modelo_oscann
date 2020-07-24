import PatientDemographic from '../../models/patient_demographics';

const getPatientDemographicsById = async (id) => {
  const patientDemographicsReturn = await PatientDemographic.findById(id);
  return patientDemographicsReturn;
};

export default getPatientDemographicsById;
