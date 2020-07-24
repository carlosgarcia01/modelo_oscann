import Serie from '../../models/serie.model';

const createSerie = async (serie) => {
  const newSerie = new Serie(serie);
  return newSerie.save();
};

export default createSerie;
