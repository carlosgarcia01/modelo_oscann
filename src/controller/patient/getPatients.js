import Patient from '../../models/patient.model';

const getPatients = async () => {
  const patientsReturn = await Patient.find();
  return patientsReturn;
};

export default getPatients;
