import React, { useState, useEffect } from "react";
import {
  MsalProvider,
  useMsal,
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
import { PublicClientApplication } from "@azure/msal-browser";
import { config } from "./Config";
import SideNavbar from "./components/SideNavbar";
import ClientList from "./components/ClientList";
import TopBar from "./components/TopBar";
import SearchBar from "./components/SearchBar";
import ClientDetails from "./pages/ClientDetails";
import ClientInfo from "./pages/ClientInfo";

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

function AppContent() {
  const { instance } = useMsal();
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("");
  const [selectedClient, setSelectedClient] = useState(null);
  const [viewMode, setViewMode] = useState("recommendations");

  const INACTIVITY_TIMEOUT = 1 * 60 * 1000; // 5 minutes in milliseconds
  let logoutTimer;

  const resetTimer = () => {
    clearTimeout(logoutTimer);
    logoutTimer = setTimeout(() => {
      handleLogout();
    }, INACTIVITY_TIMEOUT);
  };

  const handleLogout = async () => {
    try {
      await instance.logoutPopup();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  useEffect(() => {
    const events = ["mousemove", "keydown", "click"];
    
    const handleUserActivity = () => {
      resetTimer(); // Reset timer on user activity
    };

    // Add event listeners for user activity
    events.forEach((event) =>
      window.addEventListener(event, handleUserActivity)
    );

    // Start the inactivity timer when component mounts
    resetTimer();

    return () => {
      // Cleanup event listeners and timer when component unmounts
      clearTimeout(logoutTimer);
      events.forEach((event) =>
        window.removeEventListener(event, handleUserActivity)
      );
    };
  }, []); // Empty dependency array ensures effect runs once

  const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory);
    setSelectedClient(null);
  };

  const handleClientClick = (client) => {
    setSelectedClient(client);
  };

  const handleBackToList = () => {
    setSelectedClient(null);
  };

  const toggleViewMode = () => {
    setViewMode((prevMode) =>
      prevMode === "recommendations" ? "info" : "recommendations"
    );
  };

  const renderClientSection = () => {
    if (selectedClient) {
      if (viewMode === "info") {
        return <ClientInfo client={selectedClient} />;
      } else {
        return <ClientDetails client={selectedClient} />;
      }
    } else {
      return (
        <ClientList
          searchQuery={searchQuery}
          category={category}
          onClientClick={handleClientClick}
        />
      );
    }
  };

  return (
    <>
      <AuthenticatedTemplate>
        <div className="container-app">
          <SideNavbar handleCategoryChange={handleCategoryChange} />
          <div className="main-app">
            <TopBar
              onBackClick={handleBackToList}
              viewMode={viewMode}
              toggleViewMode={toggleViewMode}
            />
            <div>
              <SearchBar handleSearchChange={setSearchQuery} />
              {renderClientSection()}
            </div>
          </div>
        </div>
      </AuthenticatedTemplate>

      <UnauthenticatedTemplate>
        <div className="login-container">
          <h2>Please log in to access the application</h2>
          <button onClick={() => instance.loginPopup({ scopes: config.scopes })}>
            Log in with Azure AD
          </button>
        </div>
      </UnauthenticatedTemplate>
    </>
  );
}

function App() {
  return (
    <MsalProvider instance={msalInstance}>
      <AppContent />
    </MsalProvider>
  );
}

export default App;
