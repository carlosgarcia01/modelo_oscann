import State from '../../models/state.model'

export const deleteState = async (id) => {
  return await State.findByIdAndDelete(id)
};

