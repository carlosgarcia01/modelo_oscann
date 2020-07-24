import Hospital from '../../models/hospital.model';

const getHospitals = async () => {
  return Hospital.find();
};

export default getHospitals;
