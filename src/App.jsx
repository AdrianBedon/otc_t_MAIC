import React, { useEffect } from "react";
import {
  MsalProvider,
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useMsal,
} from "@azure/msal-react";
import { PublicClientApplication } from "@azure/msal-browser";
import { config } from "./Config";
import { Route, Routes } from "react-router-dom";
import { MAICRoutes } from "./routes/MAICRoutes";
import HomePage from "./pages/HomePage";
import TopBar from "./components/TopBar";

const msalInstance = new PublicClientApplication({
  auth: {
    clientId: config.appId,
    authority: config.authority,
    redirectUri: config.redirectUri,
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: false,
  },
});

const App = () => {
  const { instance } = useMsal();

  const INACTIVITY_TIMEOUT = 2 * 60 * 1000;
  let logoutTimer;

  const resetTimer = () => {
    clearTimeout(logoutTimer);
    logoutTimer = setTimeout(() => {
      handleLogout();
    }, INACTIVITY_TIMEOUT);
  };

  const handleLogout = async () => {
    try {
      instance.setActiveAccount(null);
      sessionStorage.clear();
      localStorage.clear();
      window.location.href = config.redirectUri;
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  useEffect(() => {
    const events = ["mousemove", "keydown", "click"];

    const handleUserActivity = () => {
      resetTimer();
    };

    events.forEach((event) =>
      window.addEventListener(event, handleUserActivity)
    );

    resetTimer();

    return () => {
      clearTimeout(logoutTimer);
      events.forEach((event) =>
        window.removeEventListener(event, handleUserActivity)
      );
    };
  }, []);

  return (
    <MsalProvider instance={msalInstance}>
      <TopBar handleLogout={handleLogout} />
      <AuthenticatedTemplate>
        <Routes>
          <Route path="*" element={<MAICRoutes />} />
        </Routes>
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </UnauthenticatedTemplate>
    </MsalProvider>
  );
};

export default App;
