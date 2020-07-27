import { connect } from '../../database';
import getPatientDemographics from '../../controller/patient_demographics/getPatientDemographics';

connect();

const { log, error } = console;

async function main() {
  try {
    const returnPatientDemographics = await getPatientDemographics('idPatientDemographics');
    log(returnPatientDemographics);
    return returnPatientDemographics;
  } catch (err) {
    error(err);
    return err;
  }
}

main();
