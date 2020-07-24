import HospitalGroup from "../../models/hospital_group.model";

export const deleteHospitalGroup = async (id_hospitalGroup) => {
  return await HospitalGroup.findByIdAndDelete(id_hospitalGroup)
};

export const deleteHospitalGroupIdGlobal = async (id_hospitalGroup) => {
  return await HospitalGroup.deleteOne({ "id_hospital_group":id_hospitalGroup })
};
