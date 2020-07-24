import Serie from "../../models/serie.model";;

export const createSerie = async (serie) => {
  const newSerie = new Serie(serie);
  return await newSerie.save();
};
