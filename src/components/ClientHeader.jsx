import React from "react";
import PropTypes from "prop-types";

const ClientHeader = ({ nombre, cedula }) => {
  return (
    <div className="client_hrecommendation">
      <div className="client_irecommendation">
        <h4 className="client_name_header"><b>Nombre:</b> {nombre}</h4>
        <p></p>
        <label className="client_id_header"><b>Cédula:</b> {cedula}</label>
      </div>
      <div className="client_orecommendation">
        <button className="client_nopay_button">Ver período de impago</button>
        <button className="client_action_button">Pasar a remate</button>
      </div>
    </div>
  );
};

ClientHeader.propTypes = {
  nombre: PropTypes.string,
  cedula: PropTypes.string,
};

export default ClientHeader;
