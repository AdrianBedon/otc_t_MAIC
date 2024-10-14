import React, { useState } from "react";
import SideNavbar from "./components/SideNavbar";
import ClientList from "./components/ClientList";
import TopBar from "./components/TopBar";
import SearchBar from "./components/SearchBar";
import ClientDetails from "./pages/ClientDetails";
import ClientInfo from "./pages/ClientInfo";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("");
  const [selectedClient, setSelectedClient] = useState(null);
  const [viewMode, setViewMode] = useState("recommendations");

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
      {
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
      }
    </>
  );
}

export default App;
