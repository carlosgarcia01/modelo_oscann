import Serie from '../../models/serie.model';

const getSeries = async () => {
  return Serie.find();
};

export default getSeries;
