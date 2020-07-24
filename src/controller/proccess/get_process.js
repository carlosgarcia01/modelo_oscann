import Process from "../../models/process.model";

export const getProcessById = async (id) => {
  return await Process.findById(id);
};
