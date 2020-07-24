import StudyCatalog from '../../models/study_catalog.model'

export const getStudyCatalogs = async () => {
  return await StudyCatalog.find();
};


