import Hospital from "../../models/hospital.model";

export  const updateHospital = async (id, hospital,) => {
  return await Hospital.findByIdAndUpdate(id, hospital, { new: true });
};

export  const updateHospitalIdGlobal = async (id,hospital) => {
  return await Hospital.findOneAndUpdate({ "id_hospital":id }, hospital, { new: true });
};
