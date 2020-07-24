import ReasonCancellation from "../../models/reason_cancellation.model";

export const deleteReasonCancellation = async (id_reason) => {
  return await ReasonCancellation.findByIdAndDelete(id_reason)
};
