import SyncHostState from '../../models/host_synchronization_status.model';

const getSyncHostStateById = async (id) => {
  const logReturn = await SyncHostState.findById(id);
  return logReturn;
};

export default getSyncHostStateById;
