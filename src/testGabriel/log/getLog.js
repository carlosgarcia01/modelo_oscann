import { connect } from '../../database';
import getLog from '../../controller/log/getLog';

connect();

const { log, error } = console;

async function main() {
  try {
    const returnLog = await getLog('idLog');
    log(returnLog);
    return returnLog;
  } catch (err) {
    error(err);
    return err;
  }
}

main();
