import ResultType from '../../models/result_type.model';

const deleteResultType = async (idResultType) => {
  return ResultType.findByIdAndDelete(idResultType);
};

export default deleteResultType;
