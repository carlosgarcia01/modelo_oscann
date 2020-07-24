import HospitalGroup from "../../models/hospital_group.model";

export const createHospitalGroup = async (hospital_group) => {
  const newHospitalGroup = new HospitalGroup(hospital_group);
  const HospitalGroupReturn = await newHospitalGroup.save();
  return HospitalGroupReturn;
};
