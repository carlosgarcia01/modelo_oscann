import SerieCatalog from "../../models/serie_catalog.model";

export const getSerieCatalogs = async () => {
  return await SerieCatalog.find();
};
