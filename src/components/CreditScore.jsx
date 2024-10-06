import React from 'react';
import { Box, Typography } from '@mui/material';

const CreditScore = ({ score }) => {
  return (
    <Box mt={4} textAlign="center">
      <Typography variant="h6">Calificación crediticia</Typography>
      <Typography variant="h1" style={{ fontSize: '80px', fontWeight: 'bold' }}>
        {score}
      </Typography>
    </Box>
  );
};

export default CreditScore;
