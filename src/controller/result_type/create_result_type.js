import ResultType from "../../models/result_type.model";

export const createResultType = async (resultType) => {
  const newResultType = new ResultType(resultType);
  return await newResultType.save();
};
