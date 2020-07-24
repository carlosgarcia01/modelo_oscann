import ReasonCancellation from "../../models/reason_cancellation.model";

export const createReasonCancellation = async (reasonCancellation) => {
  const newReasonCancellation = new ReasonCancellation(reasonCancellation);
  return await newReasonCancellation.save();
};
