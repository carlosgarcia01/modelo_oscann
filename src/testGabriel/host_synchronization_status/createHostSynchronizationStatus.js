import { connect } from '../../database';
import createHostSynchronizationStatus from '../../controller/host_synchronization_status/createHostSynchronizationStatus';

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
    const savedHostSync = await createHostSynchronizationStatus(HostSync);
    log(savedHostSync);
    return savedHostSync;
  } catch (err) {
    error(err);
    return err;
  }
}

main();
