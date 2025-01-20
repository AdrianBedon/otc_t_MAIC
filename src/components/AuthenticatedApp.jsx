import React, { useState, useEffect } from "react";
import { useMsal } from "@azure/msal-react";
import SideNavbar from "../components/SideNavbar";
import ClientList from "../components/ClientList";
import TopBar from "../components/TopBar";
import SearchBar from "../components/SearchBar";
import ClientDetails from "../pages/ClientDetails";
import ClientInfo from "../pages/ClientInfo";
import { config } from "../Config";

const AuthenticatedApp = () => {
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
      instance.setActiveAccount(null);
      sessionStorage.clear(); // Clear session storage
      localStorage.clear(); // Clear local storage
      window.location.href = config.redirectUri; // Redirect to login page
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  useEffect(() => {
    const events = ["mousemove", "keydown", "click"];

    const handleUserActivity = () => {
      resetTimer(); // Reset timer on user activity
    };

    events.forEach((event) =>
      window.addEventListener(event, handleUserActivity)
    );

    resetTimer(); // Start the inactivity timer when component mounts

    return () => {
      clearTimeout(logoutTimer);
      events.forEach((event) =>
        window.removeEventListener(event, handleUserActivity)
      );
    };
  }, []);

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
    <div className="container-app">
      <SideNavbar
        handleCategoryChange={handleCategoryChange}
        handleLogout={handleLogout} // Pass handleLogout to SideNavbar
      />
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
  );
};

export default AuthenticatedApp;