import Process from '../../models/process.model';

const getProcesses = async () => {
  return Process.find();
};

export default getProcesses;
