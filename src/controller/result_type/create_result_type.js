import ResultType from '../../models/result_type.model';

const createResultType = async (resultType) => {
  const newResultType = new ResultType(resultType);
  return newResultType.save();
};

export default createResultType;
