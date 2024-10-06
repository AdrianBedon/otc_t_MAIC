import React from 'react';
import { TextField, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ handleSearchChange }) => {
    return (
      <Box display="flex" alignItems="center" marginBottom="20px">
        <SearchIcon style={{ marginRight: '10px' }} />
        <TextField
          variant="outlined"
          placeholder="Search Clients..."
          fullWidth
          onChange={(e) => handleSearchChange(e.target.value)}
        />
      </Box>
    );
  };

export default SearchBar;
