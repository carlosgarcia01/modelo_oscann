import { connect } from '../../database';
import createLog from '../../controller/log/createLog';

connect();

const { log, error } = console;

async function main() {
  try {
    const Log = {
      description: 'Some description',
      update_date: 1595864358506,
      id_process: 'PROCESS1',
      id_state: 'STATE1',
      id_user: 'USER1',
    };
    const savedLog = await createLog(Log);
    log(savedLog);
    return savedLog;
  } catch (err) {
    error(err);
    return err;
  }
}

main();
