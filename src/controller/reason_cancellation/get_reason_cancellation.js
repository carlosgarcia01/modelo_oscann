import ReasonCancellation from '../../models/reason_cancellation.model';

const getReasonCancellationById = async (id) => {
  return ReasonCancellation.findById(id);
};

export default getReasonCancellationById;
