import React, { useState } from 'react';
//import './App.css'
import SideNavbar from './components/SideNavbar';
import ClientList from './components/ClientList';
import TopBar from './components/TopBar';
import SearchBar from './components/SearchBar';
import ClientDetails from './components/ClientDetails';
import { Box } from '@mui/material';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('');
  const [selectedClient, setSelectedClient] = useState(null);

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

  return (
    <Box display="flex">
      <SideNavbar handleCategoryChange={handleCategoryChange} />
      <Box flexGrow={1} display="flex" flexDirection="column">
        <TopBar onBackClick={handleBackToList} />
        <Box padding="20px">
          <SearchBar handleSearchChange={setSearchQuery} />
          
          {selectedClient ? (
            <ClientDetails client={selectedClient} />
          ) : (
            <ClientList
              searchQuery={searchQuery}
              category={category}
              onClientClick={handleClientClick}
            />
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default App
