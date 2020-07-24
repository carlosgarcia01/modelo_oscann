import State from '../../models/state.model';

const updateState = async (id, state) => {
  return State.findByIdAndUpdate(id, state, { new: true });
};

export default updateState;
