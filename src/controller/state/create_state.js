import State from '../../models/state.model';

const state = async (stateData) => {
  const newState = new State(stateData);
  return newState.save();
};

export default state;
