import ResultType from "../../models/result_type.model";

export const getResultTypeById = async (id) => {
  return await ResultType.findById(id);
};
