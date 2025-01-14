import React from "react";
import ClientInfoHeader from "../components/ClientInfoHeader";
import CreditScore from "../components/CreditScore";
import PropTypes from "prop-types";
import ClientInfoDetails from "../components/ClientInfoDetails";

const ClientInfo = ({ client }) => {
  return (
    <div className="client_details_page">
      <ClientInfoHeader nombre={client.nombre} cedula={client.cedula} />
      <CreditScore score={client.creditScore} />
      <ClientInfoDetails
        num_telefono={client.num_telefono}
        cedula={client.cedula}
        gauge={client.gauge}
        veritas={client.veritas}
      />
    </div>
  );
};

ClientInfo.propTypes = {
  client: PropTypes.object.isRequired,
};

export default ClientInfo;
