import { connect } from '../../database';
import deleteLog from '../../controller/log/deleteLog';

connect();

const { log, error } = console;

async function main() {
  try {
    const deleteReturn = await deleteLog('idLog');
    log(deleteReturn);
    return deleteReturn;
  } catch (err) {
    error(err);
    return err;
  }
}

main();
