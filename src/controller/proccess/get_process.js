import Process from '../../models/process.model';

const getProcessById = async (id) => {
  return Process.findById(id);
};

export default getProcessById;
