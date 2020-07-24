import Study from '../../models/study.model'

export  const updateStudy = async (id, study,) => {
  return await Study.findByIdAndUpdate(id, study, { new: true });
};

export  const updateStudyIdGlobal = async (study) => {
  return await Study.findOneAndUpdate({ "id_global":id }, study, { new: true });
};
