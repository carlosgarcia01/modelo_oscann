import { connect } from "./database";
import createPatient from "./controller/patient/createPatient";
import { getPatients } from "./controller/patient/getPatients";

/* Diagnostic imports */
/* 
import { createDiagnostic } from "./controller/diagnostic/createDiagnostic";
import { getDiagnosticById,getDiagnosticIdGlobal } from "./controller/diagnostic/getDiagnostic";
import { getDiagnostics } from "./controller/diagnostic/getDiagnostics";
import { updateDiagnostic, updateDiagnosticIdGlobal } from "./controller/diagnostic/updateDiagnostic";
import { deleteDiagnostic,deleteDiagnosticIdGlobal } from "./controller/diagnostic/deleteDiagnostic";
 */


 /* Diagnostic params imports */
/* 
 import { createDiagnosticParams } from "./controller/diagnosticParams/createDiagnosticParam";
 import { getDiagnosticParamsById } from "./controller/diagnosticParams/getDiagnosticParam";
 import { getDiagnosticParams } from "./controller/diagnosticParams/getDiagnosticParams";
 import { updateDiagnosticParams } from "./controller/diagnosticParams/updateDiagnosticParam";
 import { deleteDiagnosticParams } from "./controller/diagnosticParams/deleteDiagnosticParam";
  */

  /* Files imports  */
/* 
  import { createFile } from "./controller/file/createFile";
  import { getFileById } from "./controller/file/getFile";
  import { getFiles } from "./controller/file/getFiles";
  import { updateFile } from "./controller/file/updateFile";
  import { deleteFile } from "./controller/file/deleteFile";
 */

 /* Hospital imports */
 /* 
  import { createHospital } from "./controller/hospital/createHospital";
  import { getHospitalById,getHospitalIdGlobal } from "./controller/hospital/getHospital";
  import { getHospitals } from "./controller/hospital/getHospitals";
  import { updateHospital,updateHospitalIdGlobal } from "./controller/hospital/updateHospital";
  import { deleteHospital,deleteHospitalIdGlobal } from "./controller/hospital/deleteHospital";
 */


 /* Hospital group imports */

  import { createHospitalGroup } from "./controller/hospitalGroup/createHospitalGroup";
  import { getHospitalGroupById,getHospitalGroupIdGlobal } from "./controller/hospitalGroup/getHospitalGroup";
  import { getHospitalGroups } from "./controller/hospitalGroup/getHospitalGroups";
  import { updateHospitalGroup,updateHospitalGroupIdGlobal } from "./controller/hospitalGroup/updateHospitalGroup";
  import { deleteHospitalGroup,deleteHospitalGroupIdGlobal } from "./controller/hospitalGroup/deleteHospitalGroup";


connect();

async function main() {
  try {
    /* Diagnostic data */
/* 
    const diagnostic = {
      id_global_diagnostic:'2ac',
      name: 'test 12',
      results:[1,2,3,4],
      diagnostic:'This is false',
      description:'This is a diagnostic 3',
      update_date: Date.now()
    }
    const diagnosticReplace = {
      id_global_diagnostic:'2a',
      name: 'test 12',
      results:[1,2,3,4],
      diagnostic:'This is true',
      description:'This is a diagnostic 12',
      update_date: Date.now()
    }
 */
    /*     
      create(diagnostic);
      deleted('5f1a4b3003a0d436b03df2a0');
      deleteGlobal(diagnostic['id_global_diagnostic']);
      const result =  update('5f1a4c93a73484442cc271d8',diagnosticReplace);
      const result =  update2('2aw',diagnosticReplace);
      const result = await getDiagnosticById('5f1a4b3003a0d436b03df2a0');
      const result = await getDiagnosticIdGlobal('2ab'); 
      const result = await getDiagnostics()
    */




      /* Diagnostic Params data */
 
   /*  const diagnosticParams = {
      name: 'test 1',
      description:'This is a diagnostic param ',
      conclusion:'This is a conclusion 2',
      update_date: Date.now()
    } */
    
    /*     
      create(diagnosticParams);
      deleted('5f1a588df5f52b21bc6f07c1');
      const result =  update('5f1a588df5f52b21bc6f07c1',diagnosticParams);
      const result = await getDiagnosticParamsById('5f1a588df5f52b21bc6f07c1');
      const result = await getDiagnosticParams()
      */


    /* file data */
/*  
    const file = {
      protect_file: true,
      exist:false,
      update_date: Date.now(),
      id_state:'its true'
      
    }  */
    
    /*     
      create(file);
      const result = await getFileById('5f1a60388d43493a20166e50');
      const result = await getFiles()
      const result =  update('5f1a60388d43493a20166e50',file);
      deleted('5f1a60388d43493a20166e50');
      */


     /* Hospital data */

/*    
       const hospital = {
      id_hospital:'2ac',
      address: 'Crra 22',
      telephone: '302',
      postal_code: '170001',
      country: 'Colombia',
      description:'This is a hospital 3',
      update_date: Date.now()
    }
 */
    /*     
      create(hospital);
      const result =  update('5f1a65f335aba146301803c1',hospital);
      const result =  update2('2ac',hospital);
      const result = await getHospitalById('5f1a65f335aba146301803c1');
      const result = await getHospitalIdGlobal('2ac'); 
      const result = await getHospitals()
      deleteGlobal('2ac');
      deleted('5f1a673750696f1628dbd824');
      */

     /* Hospital group data */

   
       const hospital_group = {

      id_hospital_group:'2a',
      name: 'My group ',
      description:'This is a hospital group',
      update_date: Date.now()

    }
 
    /*     
      create(hospital_group);
      const result = await getHospitalGroups()
      const result = await getHospitalGroupIdGlobal('2a'); 
      const result = await getHospitalGroupById('5f1a6f7ffd4257427821ac58');
      const result =  update2('2a',hospital_group);
      const result =  update('5f1a6f7ffd4257427821ac58',hospital_group);
      deleted('5f1a6f7ffd4257427821ac58');
      deleteGlobal('2a');
      */
     

    console.log( result); 


  } catch (err) {
    console.log(err);
  }
}
/* Diagnosctic funtions */
/* async function create(diagnostic){

  const savedDiagnostic = await createDiagnostic(diagnostic);
  return savedDiagnostic;
  
}
async function update(id,diagnostic){
  const modifiedDiagnostic = await updateDiagnostic(id,diagnostic);
  return modifiedDiagnostic;
}
async function update2(id,diagnostic){
  const modifiedDiagnostic = await updateDiagnosticIdGlobal(id,diagnostic);
  return modifiedDiagnostic;
}
async function deleted(id){
  await deleteDiagnostic(id)
}
async function deleteGlobal(id){
  await deleteDiagnosticIdGlobal(id)
} */


/* Diagnostic params functions */


/* async function create(diagnostic_params){
  const savedDiagnosticParams = await createDiagnosticParams(diagnostic_params);
  return savedDiagnosticParams;
}
async function update(id,diagnostic_params){
  const modifiedDiagnosticParams = await updateDiagnosticParams(id,diagnostic_params);
  return modifiedDiagnosticParams;
}
async function deleted(id){
  await deleteDiagnosticParams(id)
} */



/* File functions */

/*  async function create(file){
  const savedFile = await createFile(file);
  return savedFile;
  }
  async function update(id,file){
    const modifiedFile = await updateFile(id,file);
    return modifiedFile;
  }
  async function deleted(id){
    await deleteFile(id)
} 
 */


 /* Hospital funtions */

 /* 
 async function create(hospital){

  const savedDiagnostic = await createHospital(hospital);
  return savedHospital;
}
async function update(id,hospital){
  const modifiedHospital = await updateHospital(id,hospital);
  return modifiedHospital;
}
async function update2(id,hospital){
  const modifiedHospital = await updateHospitalIdGlobal(id,hospital);
  return modifiedHospital;
}
async function deleted(id){
  await deleteHospital(id)
}
async function deleteGlobal(id){
  await deleteHospitalIdGlobal(id)
} 
 */


 /* Hospital group funtions */

 
 async function create(hospital_group){

  const savedHospital = await createHospitalGroup(hospital_group);
  return savedHospital;
}
async function update(id,hospital_group){
  const modifiedHospital = await updateHospitalGroup(id,hospital_group);
  return modifiedHospital;
}
async function update2(id,hospital_group){
  const modifiedHospital = await updateHospitalGroupIdGlobal(id,hospital_group);
  return modifiedHospital;
}
async function deleted(id){
  await deleteHospitalGroup(id)
}
async function deleteGlobal(id){
  await deleteHospitalGroupIdGlobal(id)
} 
 

main();
