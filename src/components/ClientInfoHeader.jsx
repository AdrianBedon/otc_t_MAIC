import React from 'react';
import { Box, Typography } from '@mui/material';

const ClientHeader = ({ name, status }) => {
  return (
    <Box mb={4}>
      <Typography variant="h4">{name}</Typography>
      <Typography variant="subtitle1" color="textSecondary">{status}</Typography>
    </Box>
  );
};

export default ClientHeader;
