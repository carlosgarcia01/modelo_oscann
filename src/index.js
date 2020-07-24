import { connect } from "./database";
import createPatient from "./controller/patient/createPatient";
import { getPatients } from "./controller/patient/getPatients";



connect();

async function main() {
  try {


    console.log( result); 


  } catch (err) {
    console.log(err);
  }
}

 

main();
