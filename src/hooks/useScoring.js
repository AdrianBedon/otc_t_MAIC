import { useReducer } from "react";
import { scoringReducer } from "../reducers/scoringReducer";
import { findAll, findByPhone } from "../services/scoringService";

const initialState = {
  scoring: [],
  selectedClient: null,
};

export const useScoring = () => {
  const [state, dispatch] = useReducer(scoringReducer, initialState);

  const getScoring = async () => {
    const result = await findAll();
    dispatch({
      type: "loadScoring",
      payload: result.data,
    });
  };

  const getScoringByPhone = async (phone) => {
    const result = await findByPhone(phone);
    dispatch({
      type: "userScoring",
      payload: result.data,
    });
  };

  const resetSelectedClient = () => {
    dispatch({
      type: "resetClient",
    });
  };

  return {
    scoring: state.scoring,
    selectedClient: state.selectedClient,
    getScoring,
    getScoringByPhone,
    resetSelectedClient,
  };
};
