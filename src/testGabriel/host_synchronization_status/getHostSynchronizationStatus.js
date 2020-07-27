import { connect } from '../../database';
import getHostSynchronizationStatus from '../../controller/host_synchronization_status/getHostSynchronizationStatus';

connect();

const { log, error } = console;

async function main() {
  try {
    const returnHostSync = await getHostSynchronizationStatus('idHostSynchronizationStatus');
    log(returnHostSync);
    return returnHostSync;
  } catch (err) {
    error(err);
    return err;
  }
}

main();
