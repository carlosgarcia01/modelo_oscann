import Hospital from "../../models/hospital.model";

export const getHospitalById = async (id_hospital) => {
  const HospitalReturn = await Hospital.findById(id_hospital);
  return HospitalReturn;
};

export const getHospitalIdGlobal = async (id_hospital) => {
  const HospitalReturn = await Hospital.findOne({ "id_hospital":id_hospital });
  return HospitalReturn;
};
