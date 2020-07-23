import { connect }  from "./database";
import createPatient from './controller/patient/createPatient';
connect();

async function main() {
  try{
      const patient = {
      _id: "1",
      id_global_patient: "G1",
      ids_patient_local:[],
      update_date: Date.now(),
      id_estudy: ["Estudio1","Estudio2"],
      id_PatientDemographic: "datos Paciente",
      id_state: "Activo",
      id_hospital: "hospital 1",
      creation_date: Date.now(),  
      updated:"true"
    }
    const savedPatient = await createPatient(patient);
    return savedPatient; 
  }catch(err){
    console.log(err)
  }
 
}

main();
