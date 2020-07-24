import File from '../../models/file.model';

const getFiles = async () => {
  return File.find();
};

export default getFiles;
