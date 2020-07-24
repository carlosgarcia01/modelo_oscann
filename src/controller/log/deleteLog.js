import Log from '../../models/log.model';

const deleteLog = async (idLog) => {
  const deletedLog = await Log.findByIdAndDelete(idLog);
  return deletedLog;
};

export default deleteLog;
