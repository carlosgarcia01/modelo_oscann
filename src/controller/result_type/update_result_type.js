import ResultType from "../../models/result_type.model";

export const updateResultType = async (id, resultType,) => {
  return await ResultType.findByIdAndUpdate(id, resultType, { new: true });
};
