import SerieCatalog from '../../models/serie_catalog.model';

const updateSerieCatalog = async (id, serieCatalog) => {
  return SerieCatalog.findByIdAndUpdate(id, serieCatalog, { new: true });
};

export default updateSerieCatalog;
