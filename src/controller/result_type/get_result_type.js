import ResultType from '../../models/result_type.model';

const getResultTypeById = async (id) => {
  return ResultType.findById(id);
};

export default getResultTypeById;
