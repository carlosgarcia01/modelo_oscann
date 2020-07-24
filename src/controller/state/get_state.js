import State from '../../models/state.model';

const getState = async (id) => {
  return State.findById(id);
};

export default getState;
