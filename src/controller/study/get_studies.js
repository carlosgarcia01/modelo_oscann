import Study from '../../models/study.model'

export const getStudies = async () => {
  return await Study.find();
};


