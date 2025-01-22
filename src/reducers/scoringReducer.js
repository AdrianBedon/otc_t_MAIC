export const scoringReducer = (state, action) => {
  switch (action.type) {
    case "loadScoring":
      return {
        ...state,
        scoring: action.payload,
      };
    case "userScoring":
      return {
        ...state,
        selectedClient: action.payload,
      };
    case "resetClient":
      return {
        ...state,
        selectedClient: null, // Reset selected client to null
      };
    default:
      return state;
  }
};
