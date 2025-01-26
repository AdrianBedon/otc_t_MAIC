import React from "react";
import PropTypes from "prop-types";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const ClientHeader = ({ nombre, cedula, onBack }) => {
  return (
    <div className="client_header">
      <div className="left-section-header">
        <button className="back-button" onClick={onBack}>
          <ArrowBackIosIcon />
        </button>
        <div className="client-data">
          <h4 className="client-name-header">{nombre}</h4>
          <label className="client-ci-header">
            <b>Cédula:</b> {cedula}
          </label>
        </div>
      </div>
      {sessionStorage.getItem("roles") !== "Application.Read" && (
        <div className="client-button-section">
          <button className="client-auction-btn">Enviar a remate</button>
        </div>
      )}
    </div>
  );
};

ClientHeader.propTypes = {
  nombre: PropTypes.string,
  cedula: PropTypes.string,
  onBack: PropTypes.func,
};

export default ClientHeader;
