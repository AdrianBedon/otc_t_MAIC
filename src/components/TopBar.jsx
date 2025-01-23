import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import { config } from "../Config";

const TopBar = ({ handleLogout }) => {
  const { instance } = useMsal();
  const isAuthenticated = useIsAuthenticated();

  const handleLogin = async () => {
    const token = await instance.acquireTokenPopup({ scopes: config.scopes });
    sessionStorage.setItem("roles", token.idTokenClaims?.roles);
    console.log(sessionStorage.getItem("roles"));
  };

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
          <>
            <button className="button logout-button" onClick={handleLogout}>
              Log Out
            </button>
            <p className="profile_text">
              {sessionStorage.getItem("roles") === "Application.Read"
                ? "Atención al Usuario"
                : "Cobranzas"}
            </p>
          </>
        ) : (
          <button className="button login-button" onClick={handleLogin}>
            Log in with Azure AD
          </button>
        )}
      </div>
    </div>
  );
};

TopBar.propTypes = {
  handleLogout: PropTypes.func,
};

export default TopBar;
