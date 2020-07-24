import ReasonCancellation from '../../models/reason_cancellation.model';

const createReasonCancellation = async (reasonCancellation) => {
  const newReasonCancellation = new ReasonCancellation(reasonCancellation);
  return newReasonCancellation.save();
};

export default createReasonCancellation;
