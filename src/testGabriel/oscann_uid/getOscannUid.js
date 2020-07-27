import { connect } from '../../database';
import getOscannUid from '../../controller/oscann_uid/getOscannUid';

connect();

const { log, error } = console;

async function main() {
  try {
    const returnOscannUid = await getOscannUid('idOscannUid');
    log(returnOscannUid);
    return returnOscannUid;
  } catch (err) {
    error(err);
    return err;
  }
}

main();
