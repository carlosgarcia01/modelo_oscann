import SerieCatalog from "../../models/serie_catalog.model";

export const deleteSerieCatalog = async (id_serie_catalog) => {
  return await SerieCatalog.findByIdAndDelete(id_serie_catalog)
};
