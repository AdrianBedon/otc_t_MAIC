import React from 'react';
import { Box } from '@mui/material';
import ClientInfoHeader from './ClientInfoHeader';
import CreditScore from './CreditScore';
import ClientInfoDetails from './ClientInfoDetails';

const ClientInfo = ({ client }) => {
  return (
    <Box padding="20px" flexGrow={1}>
      <ClientInfoHeader name={client.name} status={client.status} />
      <CreditScore score={client.creditScore} />
      <ClientInfoDetails
        phone={client.phone}
        id={client.id}
        portfolioPunishment={client.portfolioPunishment}
        creditLimit={client.creditLimit}
      />
    </Box>
  );
};

export default ClientInfo;
