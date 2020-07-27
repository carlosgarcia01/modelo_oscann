import { connect } from '../../database';
import deleteOscannUid from '../../controller/oscann_uid/deleteOscannUid';

connect();

const { log, error } = console;

async function main() {
  try {
    const deleteReturn = await deleteOscannUid('idOscannUid');
    log(deleteReturn);
    return deleteReturn;
  } catch (err) {
    error(err);
    return err;
  }
}

main();
