import HospitalGroup from "../../models/hospital_group.model";


export const getHospitalGroups = async () => {
  return await HospitalGroup.find();
};


