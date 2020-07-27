import { connect } from '../../database';
import deletePatientDemographics from '../../controller/patient_demographics/deletePatientDemographics';

connect();

const { log, error } = console;

async function main() {
  try {
    const deleteReturn = await deletePatientDemographics('idPatientDemographics');
    log(deleteReturn);
    return deleteReturn;
  } catch (err) {
    error(err);
    return err;
  }
}

main();
