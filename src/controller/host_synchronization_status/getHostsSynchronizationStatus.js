import SyncHostState from '../../models/host_synchronization_status.model';

const getHostsSynchronizationStatus = async () => {
  const hostsSynchronizationStatusReturn = await SyncHostState.find();
  return hostsSynchronizationStatusReturn;
};

export default getHostsSynchronizationStatus;
