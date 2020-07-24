import Log from "../../models/log.model";

export const deleteLog = async (id_log) => {
  return await Log.findByIdAndDelete(id_log);
};
