import Study from '../../models/study.model';

const createStudy = async (study) => {
  const newStudy = new Study(study);
  return newStudy.save();
};

export default createStudy;
