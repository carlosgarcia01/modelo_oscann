import Log from '../../models/log.model';

const getLogById = async (id) => {
  const logReturn = await Log.findById(id);
  return logReturn;
};

export default getLogById;
