import HospitalGroup from "../../models/hospital_group.model";

export  const updateHospitalGroup = async (id, hospital_group,) => {
  return await HospitalGroup.findByIdAndUpdate(id, hospital_group, { new: true });
};

export  const updateHospitalGroupIdGlobal = async (id,hospital_group) => {
  return await HospitalGroup.findOneAndUpdate({ "id_hospital_group":id }, hospital_group, { new: true });
};
