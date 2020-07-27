import { connect } from '../../database';
import getHostsSynchronizationStatus from '../../controller/host_synchronization_status/getHostsSynchronizationStatus';

connect();

const { log, error } = console;

async function main() {
  try {
    const returnHostsSync = await getHostsSynchronizationStatus();
    log(returnHostsSync);
    return returnHostsSync;
  } catch (err) {
    error(err);
    return err;
  }
}

main();
