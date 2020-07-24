import Study from '../../models/study.model';

const getStudies = async () => {
  return Study.find();
};

export default getStudies;
