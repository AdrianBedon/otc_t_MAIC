import { useReducer } from "react";
import { scoringReducer } from "../reducers/scoringReducer";
import { findAll } from "../services/ScoringService";

const initialScoring = [];

export const useScoring = () => {
  const [scoring, dispatch] = useReducer(scoringReducer, initialScoring);

  const getScoring = async () => {
    const result = await findAll();
    dispatch({
      type: "loadScoring",
      payload: result.data,
    });
  };

  return {
    scoring,
    getScoring,
  };
};
