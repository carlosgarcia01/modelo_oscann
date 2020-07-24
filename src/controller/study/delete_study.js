import Study from '../../models/study.model';

export const deleteStudy = async (id) => {
  return Study.findByIdAndDelete(id);
};

export const deleteStudyIdLocal = async (idStudyLocal) => {
  return Study.deleteOne({ id_local: idStudyLocal });
};

export const deleteStudyIdGlobal = async (idStudyGlobal) => {
  return Study.deleteOne({ id_global: idStudyGlobal });
};
