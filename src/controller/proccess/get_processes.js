import Process from "../../models/process.model";

export const getProcesses = async () => {
  return await Process.find();
};
