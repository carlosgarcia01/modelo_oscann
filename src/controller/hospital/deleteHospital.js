import Hospital from '../../models/hospital.model';

export const deleteHospital = async (idDospital) => {
  return Hospital.findByIdAndDelete(idDospital);
};

export const deleteHospitalIdGlobal = async (idDospital) => {
  return Hospital.deleteOne({ id_hospital: idDospital });
};
