import Patient from "../../models/patient.model";

const createPatient = async (patient) => {
  const newPatient = new Patient(patient);
  const patientReturn = await newPatient.save();
  return patientReturn;
};

export default createPatient;
