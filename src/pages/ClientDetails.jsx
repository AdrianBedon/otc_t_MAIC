import React, { useState } from "react";
import { Tabs, Tab } from "@mui/material";
import ClientHeader from "../components/ClientHeader";
import RecommendationsList from "../components/RecommendationsList";
import PropTypes from "prop-types";

const recommendationsData = [
  {
    type: "Llamada telefónica",
    detail:
      "Llamada al número del cliente registrado. Recomendado hasta la 3ra llamada.",
  },
  {
    type: "Mensaje de texto",
    detail:
      "Mensaje de texto al número registrado. Recomendado sin importar los mensajes previamente enviados.",
  },
  {
    type: "Correo electrónico",
    detail:
      "Mensaje al correo electrónico registrado. Recomendado hasta 5 correos electrónicos.",
  },
];

const ClientDetails = ({ client }) => {
  const [tab, setTab] = useState(0);
  const [liked, setLiked] = useState([false, false, false]);
  const [blocked, setBlocked] = useState([false, false, false]);
  const [feedbackBlocked, setFeedbackBlocked] = useState([false, false, false]);

  const handleBlockClick = (index) => {
    const updatedBlocked = [...blocked];
    updatedBlocked[index] = true;
    setBlocked(updatedBlocked);
  };
  const handleLikeClick = (index) => {
    const updatedLikes = [...liked];
    updatedLikes[index] = !liked[index];
    setLiked(updatedLikes);

    const updatedFeedbackBlocked = [...feedbackBlocked];
    updatedFeedbackBlocked[index] = true;
    setFeedbackBlocked(updatedFeedbackBlocked);
  };

  return (
    <div className="client_details_page">
      <ClientHeader name={client.name} status={client.status} />
      <Tabs
        value={tab}
        onChange={(e, newValue) => setTab(newValue)}
        aria-label="client tabs"
      >
        <Tab label="Recomendado" />
        <Tab label="General" />
      </Tabs>
      <RecommendationsList
        recommendations={recommendationsData}
        liked={liked}
        handleLikeClick={handleLikeClick}
        handleBlockClick={handleBlockClick}
        blocked={blocked}
        feedbackBlocked={feedbackBlocked}
      />
    </div>
  );
};

ClientDetails.propTypes = {
  client: PropTypes.object.isRequired,
};

export default ClientDetails;
