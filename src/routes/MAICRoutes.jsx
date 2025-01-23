import { Route, Routes } from "react-router-dom";
import { ScoringProvider } from "../context/ScoringProvider";
import ClientPage from "../pages/ClientPage";
import HomePage from "../pages/HomePage";

export const MAICRoutes = () => {
  return (
    <ScoringProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/client-list" element={<ClientPage />} />
      </Routes>
    </ScoringProvider>
  );
};
