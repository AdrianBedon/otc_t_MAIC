import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const ClientHeader = ({ name, status }) => {
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
      <Box>
        <Typography variant="h4">{name}</Typography>
        <Typography variant="subtitle1">{status}</Typography>
      </Box>
      <Box>
        <Button variant="contained" color="primary" style={{ marginRight: '10px' }}>
          Ver período de impago
        </Button>
        <Button variant="outlined" color="secondary">
          Pasar a remate
        </Button>
      </Box>
    </Box>
  );
};

export default ClientHeader;
