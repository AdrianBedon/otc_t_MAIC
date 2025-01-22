import React from "react";
import PropTypes from "prop-types";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const ClientHeader = ({ nombre, cedula, onBack }) => {
  return (
    <div className="client_hrecommendation">
      <button className="back_button" onClick={onBack}>
        <ArrowBackIosIcon />
      </button>
      <div className="client_irecommendation">
        <h4 className="client_name_header">
          <b>Nombre:</b> {nombre}
        </h4>
        <p></p>
        <label className="client_id_header">
          <b>Cédula:</b> {cedula}
        </label>
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
  onBack: PropTypes.func,
};

export default ClientHeader;
