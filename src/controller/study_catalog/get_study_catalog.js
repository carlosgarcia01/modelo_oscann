import StudyCatalog from '../../models/study_catalog.model';

const getStudyCatalogByIdLocal = async (id) => {
  return StudyCatalog.findById(id);
};

export default getStudyCatalogByIdLocal;
