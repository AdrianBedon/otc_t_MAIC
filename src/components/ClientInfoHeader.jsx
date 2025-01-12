import React from "react";
import PropTypes from "prop-types";

const ClientHeader = ({ name, status }) => {
  return (
    <div className="client_header">
      <h4 className="client_name_header">{name}</h4>
      <label className="client_status_header">{status}</label>
    </div>
  );
};

ClientHeader.propTypes = {
  name: PropTypes.string,
  status: PropTypes.string,
};

export default ClientHeader;
