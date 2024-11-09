import React from "react";
import { Icon } from "@mui/material";
import PropTypes from "prop-types";

const ClientDetailItem = ({ label, value, icon }) => {
  return (
    <div className="client_detail_item">
      <Icon className="client_detail_item_icon">{icon}</Icon>
      <label className="client_detail_item_label">{label}</label>
      <label className="client_detail_item_value">{value}</label>
    </div>
  );
};

ClientDetailItem.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  icon: PropTypes.object,
};

export default ClientDetailItem;
