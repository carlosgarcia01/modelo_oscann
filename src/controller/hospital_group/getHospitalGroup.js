import HospitalGroup from '../../models/hospital_group.model';

export const getHospitalGroupById = async (idHospitalGroup) => {
  const HospitalGroupReturn = await HospitalGroup.findById(idHospitalGroup);
  return HospitalGroupReturn;
};

export const getHospitalGroupIdGlobal = async (idHospitalGroup) => {
  const HospitalGroupReturn = await HospitalGroup.findOne({ id_hospital_group: idHospitalGroup });
  return HospitalGroupReturn;
};
