import State from '../../models/state.model';

const deleteState = async (id) => {
  return State.findByIdAndDelete(id);
};

export default deleteState;
