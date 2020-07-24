import Study from '../../models/study.model';

export const getStudyByIdLocal = async (id) => {
  return Study.findById(id);
};

export const getStudyIdGlobal = async (id) => {
  return Study.findOne({ id_global: id });
};
