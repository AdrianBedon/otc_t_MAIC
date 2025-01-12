import React from "react";
import ClientInfoHeader from "../components/ClientInfoHeader";
import CreditScore from "../components/CreditScore";
import ClientInfoDetails from "../components/ClientInfoDetails";
import PropTypes from "prop-types";

const ClientInfo = ({ client }) => {
  return (
    <div className="client_details_page">
      <ClientInfoHeader name={client.name} status={client.status} />
      <CreditScore score={client.creditScore} />
      <ClientInfoDetails
        phone={client.phone}
        id={client.id}
        portfolioPunishment={client.portfolioPunishment}
        creditLimit={client.creditLimit}
      />
    </div>
  );
};

ClientInfo.propTypes = {
  client: PropTypes.object.isRequired,
};

export default ClientInfo;
