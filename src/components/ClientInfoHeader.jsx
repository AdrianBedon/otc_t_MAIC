import React from "react";
import PropTypes from "prop-types";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const ClientHeader = ({ nombre, cedula, onBack }) => {
  return (
    <div className="client_header">
      <button className="back_button" onClick={onBack}>
        <ArrowBackIosIcon />
      </button>
      <h4 className="client_name_header">{nombre}</h4>
      <label className="client_status_header">{cedula}</label>
    </div>
  );
};

ClientHeader.propTypes = {
  nombre: PropTypes.string,
  cedula: PropTypes.string,
  onBack: PropTypes.func,
};

export default ClientHeader;
