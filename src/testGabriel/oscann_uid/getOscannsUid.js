import { connect } from '../../database';
import getOscannsUid from '../../controller/oscann_uid/getOscannsUid';

connect();

const { log, error } = console;

async function main() {
  try {
    const returnOscannsUid = await getOscannsUid();
    log(returnOscannsUid);
    return returnOscannsUid;
  } catch (err) {
    error(err);
    return err;
  }
}

main();
