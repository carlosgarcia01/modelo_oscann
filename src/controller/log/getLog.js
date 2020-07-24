import Log from "../../models/log.model";

export const getLogById = async (id) => {
  const logReturn = await Log.findById(id);
  return logReturn;
};
