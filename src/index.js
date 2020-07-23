import { connect } from "./database";
import createPatient from "./controller/patient/createPatient";
import { getPatients } from "./controller/patient/getPatients";
connect();

async function main() {
  try {
    const patient = {
      id_global_patient: "G3",
      id_local_patient: "id_local_patient 3",
    };
    const savedPatient = await createPatient(patient);
    const result = await getPatients();
    console.log(result);
    return savedPatient;
  } catch (err) {
    console.log(err);
  }
}


main();
