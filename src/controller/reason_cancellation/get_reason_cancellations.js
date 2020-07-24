import ReasonCancellation from '../../models/reason_cancellation.model';

const getReasonCancellations = async () => {
  return ReasonCancellation.find();
};

export default getReasonCancellations;
