import SyncHostState from '../../models/host_synchronization_status.model';

const updateHostSynchronizationStatus = async (id, hostSynchronizationStatus) => {
  const hostSynchronizationStatusUpdated = await SyncHostState.findByIdAndUpdate(
    id,
    hostSynchronizationStatus,
    { new: true }
  );
  return hostSynchronizationStatusUpdated;
};

export default updateHostSynchronizationStatus;
