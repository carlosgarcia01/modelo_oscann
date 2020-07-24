import Log from "../../models/log.model";

export const updateLog = async (id, log) => {
  return await Log.findByIdAndUpdate(id, log, { new: true });
};
