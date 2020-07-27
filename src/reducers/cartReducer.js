import givenState from "./givenState";

export default function cart(state = givenState.finalCart, action) {
  const { type } = action;
  const { item } = action;
  switch (type) {
    case "REMOVE":
      // eslint-disable-next-line no-self-compare
      return state.filter(item => item.id !== item.id);
    case "ADD":
      return [...state, item];
    default:
      return state;
  }
}
