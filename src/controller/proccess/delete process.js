import Process from "../../models/process.model";

export const deleteProcess = async (id_process) => {
  return await Process.findByIdAndDelete(id_process)
};
