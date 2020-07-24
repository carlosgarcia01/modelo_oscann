import Hospital from "../../models/hospital.model";

export const getHospitals = async () => {
  return await Hospital.find();
};


