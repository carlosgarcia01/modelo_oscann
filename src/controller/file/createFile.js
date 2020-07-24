import File from "../../models/file.model";

export const createFile = async (file) => {
  const newFile = new File(file);
  const FileReturn = await newFile.save();
  return FileReturn;
};

