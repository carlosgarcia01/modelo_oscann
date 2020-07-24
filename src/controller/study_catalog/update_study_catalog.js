import StudyCatalog from '../../models/study_catalog.model';

const updateStudyCatalog = async (id, studyCatalog) => {
  return StudyCatalog.findByIdAndUpdate(id, studyCatalog, { new: true });
};

export default updateStudyCatalog;
