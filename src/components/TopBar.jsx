import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const TopBar = ({ onBackClick }) => {
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" padding="10px 20px" boxShadow={1}>
      <Box display="flex" alignItems="center">
        <IconButton onClick={onBackClick}>
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h6" style={{ marginLeft: '10px' }}>
          Lista de Clientes
        </Typography>
      </Box>
      <Box display="flex" alignItems="center">
        {/*<IconButton>
          <SearchIcon />
        </IconButton>*/}
        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <AttachFileIcon />
        </IconButton>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default TopBar;
