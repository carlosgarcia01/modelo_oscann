import File from "../../models/file.model";

export  const updateFile = async (id, file,) => {
  return await File.findByIdAndUpdate(id, file, { new: true });
};
