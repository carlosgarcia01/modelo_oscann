import HospitalGroup from '../../models/hospital_group.model';

export const deleteHospitalGroup = async (idHospitalGroup) => {
  return HospitalGroup.findByIdAndDelete(idHospitalGroup);
};

export const deleteHospitalGroupIdGlobal = async (idHospitalGroup) => {
  return HospitalGroup.deleteOne({ id_hospital_group: idHospitalGroup });
};
