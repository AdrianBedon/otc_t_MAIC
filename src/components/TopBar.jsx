import React from "react";
import { Switch } from "@mui/material";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import { config } from "../Config";

const TopBar = ({ viewMode, toggleViewMode, handleLogout }) => {
  const { instance } = useMsal();
  const isAuthenticated = useIsAuthenticated();

  return (
    <div className="top_bar">
      <div className="top_bar_items">
        <NavLink className=" top_bar_text" to="/">
          <img
            className="img-top_bar"
            src="src\assets\MAIC_Logo_H.png"
            alt="MAIC Logo"
          />
        </NavLink>
      </div>
      {isAuthenticated ? (
        <div className="top_bar_items">
          <NavLink className="nav_link top_bar_text" to="/client-list">
            Portafolio de Clientes
          </NavLink>
        </div>
      ) : (
        <div className="top_bar_items"></div>
      )}
      <div className="top_bar_items">
        {isAuthenticated ? (
          <button className="button logout-button" onClick={handleLogout}>
            Log Out
          </button>
        ) : (
          <button
            className="button login-button"
            onClick={() => instance.loginPopup({ scopes: config.scopes })}
          >
            Log in with Azure AD
          </button>
        )}
        <p className="profile_text">
          {viewMode === "info" ? "Client Info" : "Recommendations"}
        </p>
        <Switch checked={viewMode === "info"} onChange={toggleViewMode} />
      </div>
    </div>
  );
};

TopBar.propTypes = {
  viewMode: PropTypes.string,
  toggleViewMode: PropTypes.func,
  handleLogout: PropTypes.func,
};

export default TopBar;
