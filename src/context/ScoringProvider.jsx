import { useMemo } from "react";
import { useScoring } from "../hooks/useScoring";
import { ScoringContext } from "./ScoringContext";
import PropTypes from "prop-types";

export const ScoringProvider = ({ children }) => {
  const {
    scoring,
    selectedClient,
    getScoring,
    getScoringByPhone,
    resetSelectedClient,
  } = useScoring();

  const value = useMemo(
    () => ({
      scoring,
      selectedClient,
      getScoring,
      getScoringByPhone,
      resetSelectedClient,
    }),
    [
      scoring,
      selectedClient,
      getScoring,
      getScoringByPhone,
      resetSelectedClient,
    ]
  );
  return (
    <ScoringContext.Provider value={value}>{children}</ScoringContext.Provider>
  );
};

ScoringProvider.propTypes = {
  children: PropTypes.object.isRequired,
};
