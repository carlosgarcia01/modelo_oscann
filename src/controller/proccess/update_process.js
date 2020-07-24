import Process from '../../models/process.model';

export const updateProcess = async (id, process,) => {
  return await Process.findByIdAndUpdate(id, process, { new: true });
};
