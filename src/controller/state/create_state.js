import State from "../../models/state.model";

export const state = async (state) => {
  const newState = new State(state);
  return await newState.save();;
};

