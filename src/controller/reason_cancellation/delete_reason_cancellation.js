import ReasonCancellation from '../../models/reason_cancellation.model';

const deleteReasonCancellation = async (idReason) => {
  return ReasonCancellation.findByIdAndDelete(idReason);
};

export default deleteReasonCancellation;
