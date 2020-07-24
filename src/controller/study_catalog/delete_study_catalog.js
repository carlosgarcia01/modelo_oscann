import StudyCatalog from '../../models/study_catalog.model';

const deleteStudyCatalog = async (id) => {
  return StudyCatalog.findByIdAndDelete(id);
};

export default deleteStudyCatalog;
