import StudyCatalog from '../../models/study_catalog.model'

export const deleteStudyCatalog = async (id) => {
  return await StudyCatalog.findByIdAndDelete(id)
};

export const deleteStudyCatalogIdGlobal = async (id_StudyCatalog) => {
  return await StudyCatalog.deleteOne({ "id_global_StudyCatalog":id_StudyCatalog })
};
