export const scoringReducer = (state = [], action) => {
  switch (action.type) {
    case "loadScoring":
      return action.payload;
    default:
      return state;
  }
};
