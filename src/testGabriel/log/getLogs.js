import { connect } from '../../database';
import getLogs from '../../controller/log/getLogs';

connect();

const { log, error } = console;

async function main() {
  try {
    const returnLogs = await getLogs();
    log(returnLogs);
    return returnLogs;
  } catch (err) {
    error(err);
    return err;
  }
}

main();
