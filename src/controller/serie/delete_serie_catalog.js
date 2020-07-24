import Serie from "../../models/serie.model";;

export const deleteSerie = async (id_serie) => {
  return await Serie.findByIdAndDelete(id_serie)
};
