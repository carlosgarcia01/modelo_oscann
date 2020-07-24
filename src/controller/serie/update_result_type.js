import Serie from '../../models/serie.model';

const updateSerie = async (id, serie) => {
  return Serie.findByIdAndUpdate(id, serie, { new: true });
};

export default updateSerie;
