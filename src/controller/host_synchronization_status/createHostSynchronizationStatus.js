import SyncHostState from '../../models/host_synchronization_status.model';

const createSyncHostState = async (hostSynchronizationStatusObj) => {
  const newSyncHostState = new SyncHostState(hostSynchronizationStatusObj);
  const hostSynchronizationStatusReturn = await newSyncHostState.save();
  return hostSynchronizationStatusReturn;
};

export default createSyncHostState;
