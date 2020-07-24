import SyncHostState from '../../models/host_synchronization_status.model';

const deleteHostSynchronizationStatus = async (idSyncHostState) => {
  const deletedSyncHostState = await SyncHostState.findByIdAndDelete(idSyncHostState);
  return deletedSyncHostState;
};

export default deleteHostSynchronizationStatus;
