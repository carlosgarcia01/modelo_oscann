import Process from '../../models/process.model';

const updateProcess = async (id, process) => {
  return Process.findByIdAndUpdate(id, process, { new: true });
};

export default updateProcess;
