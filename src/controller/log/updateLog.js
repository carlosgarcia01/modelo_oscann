import Log from '../../models/log.model';

const updateLog = async (id, log) => {
  const logUpdated = await Log.findByIdAndUpdate(id, log, { new: true });
  return logUpdated;
};

export default updateLog;
