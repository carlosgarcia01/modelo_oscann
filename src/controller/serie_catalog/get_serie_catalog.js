import SerieCatalog from "../../models/serie_catalog.model";

export const getSerieCatalogById = async (id) => {
  return await SerieCatalog.findById(id);
};
