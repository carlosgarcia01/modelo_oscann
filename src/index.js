import { connect } from "./database";
import createPatient from "./controller/patient/createPatient";

connect();

async function main() {
    try {
        const patient = {
            id_global_patient: "G1",
            id_local_patient: "id_local_patient",
        };
        const savedPatient = await createPatient(patient);
        return savedPatient;
    } catch (err) {
        console.log(err);
    }
}

main();