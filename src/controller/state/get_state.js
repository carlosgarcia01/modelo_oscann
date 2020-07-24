import State from '../../models/state.model'

export const getState = async (id) => {
  return await State.findById(id);;
};
