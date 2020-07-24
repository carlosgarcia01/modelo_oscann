import connect from './database';
import createProcess from './controller/proccess/create_process';

connect();
async function main() {
  try {
    const proccess = {
      description: 'Proceso numero uno',
      update_date: Date.now(),
      id_state: '123456789012',
      creation_date: Date.now(),
      updated: false,
    };
    return createProcess(proccess);
  } catch (err) {
    console.log(err);
  }
}
main();
