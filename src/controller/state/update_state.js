import State from '../../models/state.model'

export  const updateState = async (id, state,) => {
  return await State.findByIdAndUpdate(id, state, { new: true });
};
