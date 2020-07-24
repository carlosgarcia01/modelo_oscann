import Study from '../../models/study.model'

export const deleteStudy = async (id) => {
  return await Study.findByIdAndDelete(id)
};

export const deleteStudyIdLocal = async (id_study_local) => {
  return await Study.deleteOne({ "id_local":id_study_local })
};

export const deleteStudyIdGlobal = async (id_study_global) => {
  return await Study.deleteOne({ "id_global":id_study_global })
};
