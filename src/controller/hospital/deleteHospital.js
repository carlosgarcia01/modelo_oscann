import Hospital from "../../models/hospital.model";

export const deleteHospital = async (id_hospital) => {
  return await Hospital.findByIdAndDelete(id_hospital)
};

export const deleteHospitalIdGlobal = async (id_hospital) => {
  return await Hospital.deleteOne({ "id_hospital":id_hospital })
};
