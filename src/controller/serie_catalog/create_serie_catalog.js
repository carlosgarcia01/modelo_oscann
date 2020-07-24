import SerieCatalog from "../../models/serie_catalog.model";

export const createSerieCatalog = async (serieCatalog) => {
  const newSerieCatalog = new SerieCatalog(serieCatalog);
  return await newSerieCatalog.save();
};
