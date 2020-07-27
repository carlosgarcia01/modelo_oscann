import { connect } from '../../database';
import updateHostSynchronizationStatus from '../../controller/host_synchronization_status/updateHostSynchronizationStatus';

connect();

const { log, error } = console;

async function main() {
  try {
    const HostSync = {
      update_date: 1595864358506,
      id_hospital: 'H1',
      id_state: 'STATE1',
      id_host: 'HOST1',
    };
    const savedHostSync = await updateHostSynchronizationStatus('idHostSync', HostSync);
    log(savedHostSync);
    return savedHostSync;
  } catch (err) {
    error(err);
    return err;
  }
}

main();
