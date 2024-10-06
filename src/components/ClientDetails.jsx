import React, { useState } from 'react';
import { Box, Tabs, Tab } from '@mui/material';
import ClientHeader from './ClientHeader';
import RecommendationsList from './RecommendationsList';

const recommendationsData = [
  { type: 'Llamada telefónica', detail: 'Llamada al número del cliente registrado. Recomendado hasta la 3ra llamada.' },
  { type: 'Mensaje de texto', detail: 'Mensaje de texto al número registrado. Recomendado sin importar los mensajes previamente enviados.' },
  { type: 'Correo electrónico', detail: 'Mensaje al correo electrónico registrado. Recomendado hasta 5 correos electrónicos.' },
];

const ClientDetails = ({ client }) => {
  const [tab, setTab] = useState(0);
  const [liked, setLiked] = useState([false, false, false]);

  const handleLikeClick = (index) => {
    const updatedLikes = [...liked];
    updatedLikes[index] = !updatedLikes[index];
    setLiked(updatedLikes);
  };

  return (
    <Box padding="20px" flexGrow={1}>
      {/* Client Header */}
      <ClientHeader name={client.name} status={client.status} />

      {/* Tabs Section */}
      <Tabs value={tab} onChange={(e, newValue) => setTab(newValue)} aria-label="client tabs">
        <Tab label="Recomendado" />
        <Tab label="General" />
      </Tabs>

      {/* Recommendations List */}
      <RecommendationsList
        recommendations={recommendationsData}
        liked={liked}
        handleLikeClick={handleLikeClick}
      />
    </Box>
  );
};

export default ClientDetails;
