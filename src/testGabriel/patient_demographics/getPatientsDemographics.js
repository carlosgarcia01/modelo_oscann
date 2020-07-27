import { connect } from '../../database';
import getPatientsDemographics from '../../controller/patient_demographics/getPatientsDemographics';

connect();

const { log, error } = console;

async function main() {
  try {
    const returnPatientsDemographics = await getPatientsDemographics();
    log(returnPatientsDemographics);
    return returnPatientsDemographics;
  } catch (err) {
    error(err);
    return err;
  }
}

main();
