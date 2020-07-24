import SerieCatalog from '../../models/serie_catalog.model';

const createSerieCatalog = async (serieCatalog) => {
  const newSerieCatalog = new SerieCatalog(serieCatalog);
  return newSerieCatalog.save();
};

export default createSerieCatalog;
