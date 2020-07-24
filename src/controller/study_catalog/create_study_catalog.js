import StudyCatalog from '../../models/study_catalog.model';

const createStudyCatalog = async (studyCatalog) => {
  const newStudyCatalog = new StudyCatalog(studyCatalog);
  return newStudyCatalog.save();
};

export default createStudyCatalog;
