import SyncHostState from '../../models/host_synchronization_status.model';

const getHostSynchronizationStatus = async (id) => {
  const hostSynchronizationStatusReturn = await SyncHostState.findById(id);
  return hostSynchronizationStatusReturn;
};

export default getHostSynchronizationStatus;
