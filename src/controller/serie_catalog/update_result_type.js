import SerieCatalog from "../../models/serie_catalog.model";

export const updateSerieCatalog = async (id, serieCatalog,) => {
  return await SerieCatalog.findByIdAndUpdate(id, serieCatalog, { new: true });
};
