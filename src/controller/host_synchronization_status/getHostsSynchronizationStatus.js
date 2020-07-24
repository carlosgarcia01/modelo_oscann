import SyncHostState from '../../models/host_synchronization_status.model';

const getSyncHostsStates = async () => {
  const logsReturn = await SyncHostState.find();
  return logsReturn;
};

export default getSyncHostsStates;
