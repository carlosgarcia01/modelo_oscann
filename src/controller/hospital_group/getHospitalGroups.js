import HospitalGroup from '../../models/hospital_group.model';

const getHospitalGroups = async () => {
  return HospitalGroup.find();
};

export default getHospitalGroups;
