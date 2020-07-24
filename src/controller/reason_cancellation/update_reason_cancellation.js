import ReasonCancellation from '../../models/reason_cancellation.model';

const updateReasonCancellation = async (id, reasonCancellation) => {
  return ReasonCancellation.findByIdAndUpdate(id, reasonCancellation, { new: true });
};

export default updateReasonCancellation;
