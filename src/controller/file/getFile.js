import File from "../../models/file.model";

export const getFileById = async (id_file) => {
  const FileReturn = await File.findById(id_file);
  return FileReturn;
};

