import React from "react";
import PropTypes from "prop-types";
import ClientInfoDetails from "../components/ClientInfoDetails";
import ClientHeader from "../components/ClientHeader";

const ClientInfo = ({ client, onBack }) => {
  return (
    <div className="client_details_page">
      <ClientHeader
        nombre={client.nombre}
        cedula={client.cedula}
        onBack={onBack}
      />
      <ClientInfoDetails client={client} />
    </div>
  );
};

ClientInfo.propTypes = {
  client: PropTypes.object.isRequired,
  onBack: PropTypes.func.isRequired,
};

export default ClientInfo;
