import React, { useState } from 'react';
//import './App.css'
import SideNavbar from './components/SideNavbar';
import ClientList from './components/ClientList';
import TopBar from './components/TopBar';
import SearchBar from './components/SearchBar';
import { Box } from '@mui/material';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('');

  const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  return (
    <Box display="flex">
      <SideNavbar handleCategoryChange={handleCategoryChange}/>
      <Box flexGrow={1} display="flex" flexDirection="column">
        <TopBar />
        <Box padding="20px">
          <SearchBar handleSearchChange={setSearchQuery} />
          <ClientList searchQuery={searchQuery} category={category} />
        </Box>
      </Box>
    </Box>
  );
}

export default App
