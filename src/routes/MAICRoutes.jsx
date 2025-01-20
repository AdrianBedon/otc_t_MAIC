import { Route, Routes } from "react-router-dom";
import { ScoringProvider } from "../context/ScoringProvider";
import ClientPage from "../pages/ClientPage";
import HomePage from "../pages/HomePage";
import PropTypes from "prop-types";

export const MAICRoutes = ({ viewMode }) => {
  return (
    <ScoringProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/client-list"
          element={<ClientPage viewMode={viewMode} />}
        />
      </Routes>
    </ScoringProvider>
  );
};

MAICRoutes.propTypes = {
  viewMode: PropTypes.string,
};
