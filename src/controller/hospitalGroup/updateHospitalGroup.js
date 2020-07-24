import HospitalGroup from '../../models/hospital_group.model';

export const updateHospitalGroup = async (id, getHospitalGroup) => {
  return HospitalGroup.findByIdAndUpdate(id, getHospitalGroup, { new: true });
};

export const updateHospitalGroupIdGlobal = async (id, getHospitalGroup) => {
  return HospitalGroup.findOneAndUpdate({ id_hospital_group: id }, getHospitalGroup, { new: true });
};
