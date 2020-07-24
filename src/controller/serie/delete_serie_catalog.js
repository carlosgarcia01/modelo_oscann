import Serie from '../../models/serie.model';

const deleteSerie = async (idSerie) => {
  return Serie.findByIdAndDelete(idSerie);
};

export default deleteSerie;
