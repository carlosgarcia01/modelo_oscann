import ResultType from '../../models/result_type.model';

const getResultTypes = async () => {
  return ResultType.find();
};

export default getResultTypes;
