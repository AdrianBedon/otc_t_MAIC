import React from "react";
import PropTypes from "prop-types";

const ClientHeader = ({ nombre, cedula }) => {
  return (
    <div className="client_header">
      <h4 className="client_name_header">{nombre}</h4>
      <label className="client_status_header">{cedula}</label>
    </div>
  );
};

ClientHeader.propTypes = {
  nombre: PropTypes.string,
  cedula: PropTypes.string,
};

export default ClientHeader;
