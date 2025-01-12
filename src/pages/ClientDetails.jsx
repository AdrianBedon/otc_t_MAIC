import React, { useState } from "react";
import { Tabs, Tab } from "@mui/material";
import ClientHeader from "../components/ClientHeader";
import ClientInfoDetails from "../components/ClientInfoDetails";
import RecommendationsList from "../components/RecommendationsList";
import PropTypes from "prop-types";
import { Phone, Sms, Mail } from "@mui/icons-material";

const recommendationsData = [
  {
    type: "Llamada telefónica",
    detail:
      "Llamada al número del cliente registrado. Recomendado hasta la 3ra llamada.",
    icon: <Phone />,
  },
  {
    type: "Mensaje de texto",
    detail:
      "Mensaje de texto al número registrado. Recomendado sin importar los mensajes previamente enviados.",
    icon: <Sms />,
  },
  {
    type: "Correo electrónico",
    detail:
      "Mensaje al correo electrónico registrado. Recomendado hasta 5 correos electrónicos.",
    icon: <Mail />,
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
      <ClientInfoDetails
        phone={client.phone}
        id={client.id}
        portfolioPunishment={client.portfolioPunishment}
        creditLimit={client.creditLimit}
      />
      <p></p>
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
