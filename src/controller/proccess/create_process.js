import Process from "../../models/process.model";

export const createProcess = async (process) => {
  const newprocess = new Process(process);
  return await newprocess.save();
};
