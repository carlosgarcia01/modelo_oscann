import File from '../../models/file.model';

const getFileById = async (idFile) => {
  const FileReturn = await File.findById(idFile);
  return FileReturn;
};

export default getFileById;
