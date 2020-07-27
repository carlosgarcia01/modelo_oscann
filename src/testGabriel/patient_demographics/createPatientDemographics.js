import { connect } from '../../database';
import createPatientDemographics from '../../controller/patient_demographics/createPatientDemographics';

connect();

const { log, error } = console;

async function main() {
  try {
    const OscannUid = {
      name: 'Some name',
      last_name: 'Some lastname',
      date_of_birth: 115864358506,
      gender: 'MYGENDER',
      address: 'My adress',
      personal_number: '12415125315',
      emergency_name: 'Some name',
      emergency_number: '315673742467',
      update_date: 1595864358506,
      id_PatientDemographic: 'PATIENTDEMO1',
      creation_date: 115864358506,
    };
    const savedOscannUid = await createPatientDemographics(OscannUid);
    log(savedOscannUid);
    return savedOscannUid;
  } catch (err) {
    error(err);
    return err;
  }
}

main();
