import SerieCatalog from '../../models/serie_catalog.model';

const getSerieCatalogs = async () => {
  return SerieCatalog.find();
};

export default getSerieCatalogs;
