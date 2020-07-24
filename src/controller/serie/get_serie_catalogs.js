import Serie from "../../models/serie.model";;

export const getSeries = async () => {
  return await Serie.find();
};
