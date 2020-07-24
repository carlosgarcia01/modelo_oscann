import HospitalGroup from '../../models/hospital_group.model';

const createHospitalGroup = async (hospitalGroup) => {
  const newHospitalGroup = new HospitalGroup(hospitalGroup);
  const HospitalGroupReturn = await newHospitalGroup.save();
  return HospitalGroupReturn;
};

export default createHospitalGroup;
