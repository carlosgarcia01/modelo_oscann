import File from '../../models/file.model';

const deleteFile = async (idFile) => {
  return File.findByIdAndDelete(idFile);
};

export default deleteFile;
