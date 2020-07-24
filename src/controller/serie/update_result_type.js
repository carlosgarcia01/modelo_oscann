import Serie from "../../models/serie.model";;

export const updateSerie = async (id, serie,) => {
  return await Serie.findByIdAndUpdate(id, serie, { new: true });
};
