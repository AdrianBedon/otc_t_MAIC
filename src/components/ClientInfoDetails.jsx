import React from "react";
import ClientDetailItem from "./ClientDetailItem";
import PropTypes from "prop-types";

const ClientDetails = ({ phone, id, portfolioPunishment, creditLimit }) => {
  return (
    <div className="grid_idetails">
      <div className="idetials_1">
        <ClientDetailItem label="Número de teléfono" value={phone} />
      </div>
      <div className="idetails_2">
        <ClientDetailItem label="Número de cédula" value={id} />
      </div>
      <div className="idetails_3">
        <ClientDetailItem
          label="Castigo de cartera"
          value={portfolioPunishment}
        />
      </div>
      <div className="idetails_4">
        <ClientDetailItem label="Límite de crédito" value={creditLimit} />
      </div>
    </div>
  );
};

ClientDetails.propTypes = {
  phone: PropTypes.string,
  id: PropTypes.number,
  portfolioPunishment: PropTypes.string,
  creditLimit: PropTypes.number,
};

export default ClientDetails;
