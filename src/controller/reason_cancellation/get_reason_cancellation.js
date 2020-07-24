import ReasonCancellation from "../../models/reason_cancellation.model";

export const getReasonCancellationById = async (id) => {
  return await ReasonCancellation.findById(id);
};
