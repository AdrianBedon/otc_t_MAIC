import React from 'react';
import { Grid } from '@mui/material';
import ClientDetailItem from './ClientDetailItem';

const ClientDetails = ({ phone, id, portfolioPunishment, creditLimit }) => {
  return (
    <Grid container spacing={3} mt={4}>
      <Grid item xs={6}>
        <ClientDetailItem label="Número de teléfono" value={phone} />
      </Grid>
      <Grid item xs={6}>
        <ClientDetailItem label="Número de cédula" value={id} />
      </Grid>
      <Grid item xs={6}>
        <ClientDetailItem label="Castigo de cartera" value={portfolioPunishment} />
      </Grid>
      <Grid item xs={6}>
        <ClientDetailItem label="Límite de crédito" value={creditLimit} />
      </Grid>
    </Grid>
  );
};

export default ClientDetails;
