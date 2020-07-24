import Study from '../../models/study.model';

export const updateStudy = async (id, study) => {
  return Study.findByIdAndUpdate(id, study, { new: true });
};

export const updateStudyIdGlobal = async (id, study) => {
  return Study.findOneAndUpdate({ id_global: id }, study, { new: true });
};
