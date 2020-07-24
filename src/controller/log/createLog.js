import Log from "../../models/log.model";

const createLog = async (logObj) => {
  const newLog = new Log(logObj);
  const logReturn = await newLog.save();
  return logReturn;
};

export default createLog;
