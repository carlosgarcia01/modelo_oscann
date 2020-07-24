import Log from "../../models/log.model";

export const getLogs = async () => {
  return await Log.find();
};
