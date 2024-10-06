import React from 'react';
import { Paper, Typography } from '@mui/material';

const ClientDetailItem = ({ label, value }) => {
  return (
    <Paper style={{ padding: '20px', textAlign: 'center' }}>
      <Typography variant="subtitle1">{label}</Typography>
      <Typography variant="h6">{value}</Typography>
    </Paper>
  );
};

export default ClientDetailItem;
