import State from '../../models/state.model';

const getStates = async () => {
  return State.find();
};

export default getStates;
