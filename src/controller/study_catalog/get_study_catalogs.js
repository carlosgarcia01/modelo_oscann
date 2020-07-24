import StudyCatalog from '../../models/study_catalog.model';

const getStudyCatalogs = async () => {
  return StudyCatalog.find();
};

export default getStudyCatalogs;
