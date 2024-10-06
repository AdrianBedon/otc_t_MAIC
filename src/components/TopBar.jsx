import React from 'react';
import { Box, IconButton, Typography, Switch } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddIcon from '@mui/icons-material/Add';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const TopBar = ({ onBackClick, viewMode, toggleViewMode }) => {
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
        <Typography variant="body2" style={{ marginRight: '10px' }}>
          {viewMode === 'info' ? 'Client Info' : 'Recommendations'}
        </Typography>
        <Switch
          checked={viewMode === 'info'}
          onChange={toggleViewMode}
        />
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
