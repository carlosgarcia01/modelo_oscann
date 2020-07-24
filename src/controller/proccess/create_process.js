import Process from '../../models/process.model';

const createProcess = async (process) => {
  const newprocess = new Process(process);
  return newprocess.save();
};

export default createProcess;
