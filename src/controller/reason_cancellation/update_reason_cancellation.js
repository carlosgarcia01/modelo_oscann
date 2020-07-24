import ReasonCancellation from "../../models/reason_cancellation.model";

export const updateReasonCancellation = async (id, reasonCancellation,) => {
  return await ReasonCancellation.findByIdAndUpdate(id, reasonCancellation, { new: true });
};
