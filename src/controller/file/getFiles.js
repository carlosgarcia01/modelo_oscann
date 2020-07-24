import File from "../../models/file.model";

export const getFiles = async () => {
  return await File.find();
};


