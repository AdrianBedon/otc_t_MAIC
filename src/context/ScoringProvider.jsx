import { useScoring } from "../hooks/useScoring";
import { ScoringContext } from "./ScoringContext";

export const ScoringProvider = ({ children }) => {
  const { scoring, getScoring } = useScoring();
  return (
    <ScoringContext.Provider value={{ scoring, getScoring }}>
      {children}
    </ScoringContext.Provider>
  );
};
