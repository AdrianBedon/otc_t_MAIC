import React from "react";
import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import { config } from "../Config";

const HomePage = () => {
  const { instance } = useMsal();
  const isAuthenticated = useIsAuthenticated();

  const handleLogin = async () => {
    const token = await instance.acquireTokenPopup({ scopes: config.scopes });
    sessionStorage.setItem("roles", token.idTokenClaims?.roles);
    console.log(sessionStorage.getItem("roles"));
  };

  return (
    <div className="home-page">
      <div className="content-container">
        <img
          className="img-home"
          src="src\assets\MAIC_Logo.jpg"
          alt="MAIC Logo"
        />
        {isAuthenticated ? (
          <>
            <p className="home-text">
              El{" "}
              <strong>
                Modelo de Asignación Inteligente de Cobranzas (MAIC)
              </strong>{" "}
              está diseñado para optimizar la gestión de cobranzas mediante
              predicciones precisas y recomendaciones personalizadas. Explora
              las herramientas inteligentes que hemos desarrollado para ayudarte
              a tomar decisiones más efectivas y mejorar los resultados en tu
              área.
            </p>
            <p className="home-text">
              <strong>¡Bienvenido!</strong>
            </p>
          </>
        ) : (
          <button className="login-home" onClick={handleLogin}>
            <span>Log in with Azure AD</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default HomePage;
