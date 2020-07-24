import File from '../../models/file.model';

const updateFile = async (id, file) => {
  return File.findByIdAndUpdate(id, file, { new: true });
};
export default updateFile;
