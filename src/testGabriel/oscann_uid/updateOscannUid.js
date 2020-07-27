import { connect } from '../../database';
import updateOscannUid from '../../controller/oscann_uid/updateOscannUid';

connect();

const { log, error } = console;

async function main() {
  try {
    const OscannUid = {
      name: 'Some name',
      instalation_date: 1595864358506,
      creation_date: 1595864358506,
      version: 'V1',
      uid_oscann: 'OSCANN1',
    };
    const savedOscannUid = await updateOscannUid('idOscannUid', OscannUid);
    log(savedOscannUid);
    return savedOscannUid;
  } catch (err) {
    error(err);
    return err;
  }
}

main();
