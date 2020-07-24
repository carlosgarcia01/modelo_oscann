import ReasonCancellation from "../../models/reason_cancellation.model";

export const getReasonCancellations = async () => {
  return await ReasonCancellation.find();
};
