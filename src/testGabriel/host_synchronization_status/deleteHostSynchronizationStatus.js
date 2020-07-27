import { connect } from '../../database';
import deleteHostSynchronizationStatus from '../../controller/host_synchronization_status/deleteHostSynchronizationStatus';

connect();

const { log, error } = console;

async function main() {
  try {
    const deleteReturn = await deleteHostSynchronizationStatus('idHostSynchronizationStatus');
    log(deleteReturn);
    return deleteReturn;
  } catch (err) {
    error(err);
    return err;
  }
}

main();
