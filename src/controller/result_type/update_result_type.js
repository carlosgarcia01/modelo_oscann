import ResultType from '../../models/result_type.model';

const updateResultType = async (id, resultType) => {
  return ResultType.findByIdAndUpdate(id, resultType, { new: true });
};

export default updateResultType;
