import ResultType from "../../models/result_type.model";

export const getResultTypes = async () => {
  return await ResultType.find();
};
