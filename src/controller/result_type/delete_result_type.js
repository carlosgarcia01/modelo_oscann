import ResultType from "../../models/result_type.model";

export const deleteResultType = async (id_result_type) => {
  return await ResultType.findByIdAndDelete(id_result_type)
};
