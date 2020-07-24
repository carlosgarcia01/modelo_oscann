import Study from '../../models/study.model'

export const getStudyByIdLocal = async (id) => {
  return await Study.findById(id);;
};

export const getStudyIdGlobal = async (id) => {
  const StudyReturn = await Study.findOne({ "id_global":id });
  return StudyReturn;
};
