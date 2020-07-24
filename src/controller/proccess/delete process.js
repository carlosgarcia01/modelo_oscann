import Process from '../../models/process.model';

const deleteProcess = async (idProcess) => {
  return Process.findByIdAndDelete(idProcess);
};

export default deleteProcess;
