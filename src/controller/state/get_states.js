import State from '../../models/state.model'

export const getStates = async () => {
  return await State.find();
};


