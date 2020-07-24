import SyncHostState from '../../models/host_synchronization_status.model';

const deleteSyncHostState = async (idSyncHostState) => {
  const deletedSyncHostState = await SyncHostState.findByIdAndDelete(idSyncHostState);
  return deletedSyncHostState;
};

export default deleteSyncHostState;
