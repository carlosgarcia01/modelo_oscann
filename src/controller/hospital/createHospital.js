import Hospital from '../../models/hospital.model';

const createHospital = async (hospital) => {
  const newHospital = new Hospital(hospital);
  const HospitalReturn = await newHospital.save();
  return HospitalReturn;
};

export default createHospital;
