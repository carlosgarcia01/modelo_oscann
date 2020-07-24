import File from "../../models/file.model";

export const deleteFile = async (id_file) => {
  return await File.findByIdAndDelete(id_file)
};
