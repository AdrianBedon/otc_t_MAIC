import React from "react";
import ClientInfoHeader from "../components/ClientInfoHeader";
import CreditScore from "../components/CreditScore";
import PropTypes from "prop-types";
import ClientInfoDetails from "../components/ClientInfoDetails";

const ClientInfo = ({ client, onBack }) => {
  return (
    <div className="client_details_page">
      <ClientInfoHeader
        nombre={client.nombre}
        cedula={client.cedula}
        onBack={onBack}
      />
      <CreditScore score={client.creditScore} />
      <ClientInfoDetails
        numTelefono={client.numTelefono}
        cedula={client.cedula}
        gauge={client.gauge}
        veritas={client.veritas}
      />
    </div>
  );
};

ClientInfo.propTypes = {
  client: PropTypes.object.isRequired,
  onBack: PropTypes.func.isRequired,
};

export default ClientInfo;
