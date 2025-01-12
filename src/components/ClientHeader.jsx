import React from "react";
import PropTypes from "prop-types";

const ClientHeader = ({ name, status }) => {
  return (
    <div className="client_hrecommendation">
      <div className="client_irecommendation">
        <h4 className="client_name_header">{name}</h4>
        <label className="client_status_header">{status}</label>
      </div>
      <div className="client_orecommendation">
        <button className="client_nopay_button">Ver período de impago</button>
        <button className="client_action_button">Pasar a remate</button>
      </div>
    </div>
  );
};

ClientHeader.propTypes = {
  name: PropTypes.string,
  status: PropTypes.string,
};

export default ClientHeader;
