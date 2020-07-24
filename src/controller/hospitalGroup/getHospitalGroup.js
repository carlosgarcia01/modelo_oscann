import HospitalGroup from "../../models/hospital_group.model";

export const getHospitalGroupById = async (id_hospitalGroup) => {
  const HospitalGroupReturn = await HospitalGroup.findById(id_hospitalGroup);
  return HospitalGroupReturn;
};

export const getHospitalGroupIdGlobal = async (id_hospitalGroup) => {
  const HospitalGroupReturn = await HospitalGroup.findOne({ "id_hospital_group":id_hospitalGroup });
  return HospitalGroupReturn;
};
