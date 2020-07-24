import Log from '../../models/log.model';

const getLogs = async () => {
  const logsReturn = await Log.find();
  return logsReturn;
};

export default getLogs;
