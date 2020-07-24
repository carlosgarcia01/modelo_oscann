import Serie from "../../models/serie.model";;

export const getSerieById = async (id) => {
  return await Serie.findById(id);
};
