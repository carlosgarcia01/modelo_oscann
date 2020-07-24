import SerieCatalog from '../../models/serie_catalog.model';

const deleteSerieCatalog = async (idSerieCatalog) => {
  return SerieCatalog.findByIdAndDelete(idSerieCatalog);
};

export default deleteSerieCatalog;
