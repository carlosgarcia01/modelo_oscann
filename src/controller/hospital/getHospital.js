import Hospital from '../../models/hospital.model';

export const getHospitalById = async (idHospital) => {
  const HospitalReturn = await Hospital.findById(idHospital);
  return HospitalReturn;
};

export const getHospitalIdGlobal = async (idHospital) => {
  const HospitalReturn = await Hospital.findOne({ id_hospital: idHospital });
  return HospitalReturn;
};
