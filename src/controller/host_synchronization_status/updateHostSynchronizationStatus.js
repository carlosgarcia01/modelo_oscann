import SyncHostState from '../../models/host_synchronization_status.model';

const updateHostSynchronizationStatus = async (id, log) => {
  const logUpdated = await SyncHostState.findByIdAndUpdate(id, log, { new: true });
  return logUpdated;
};

export default updateHostSynchronizationStatus;
