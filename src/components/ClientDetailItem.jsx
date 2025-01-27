import React from "react";
import { Icon } from "@mui/material";
import PropTypes from "prop-types";

const ClientDetailItem = ({ label, value, icon }) => {
  return (
    <div className="client-detail-item">
      <div className="detail-title">
        <Icon className="detail-icon">{icon}</Icon>
        <label className="detail-label">{label}</label>
      </div>
      <label className="detail-value">{value}</label>
    </div>
  );
};

ClientDetailItem.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  icon: PropTypes.object,
};

export default ClientDetailItem;
