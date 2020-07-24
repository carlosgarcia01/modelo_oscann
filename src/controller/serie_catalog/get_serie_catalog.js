import SerieCatalog from '../../models/serie_catalog.model';

const getSerieCatalogById = async (id) => {
  return SerieCatalog.findById(id);
};

export default getSerieCatalogById;
