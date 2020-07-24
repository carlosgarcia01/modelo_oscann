import Serie from '../../models/serie.model';

const getSerieById = async (id) => {
  return Serie.findById(id);
};

export default getSerieById;
