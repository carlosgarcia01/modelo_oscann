import Hospital from '../../models/hospital.model';

export const updateHospital = async (id, hospital) => {
  return Hospital.findByIdAndUpdate(id, hospital, { new: true });
};

export const updateHospitalIdGlobal = async (id, hospital) => {
  return Hospital.findOneAndUpdate({ id_hospital: id }, hospital, { new: true });
};
