import React from "react";
import { Switch } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddIcon from "@mui/icons-material/Add";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PropTypes from "prop-types";

const TopBar = ({ onBackClick, viewMode, toggleViewMode }) => {
  return (
    <div className="top_bar">
      <div className="top_bar_items">
        <button className="icon_back" onClick={onBackClick}>
          <ArrowBackIcon />
        </button>
        <h2 className="top_bar_text">Lista de Clientes</h2>
      </div>

      <div className="top_bar_items">
        <p className="profile_text">
          {viewMode === "info" ? "Client Info" : "Recommendations"}
        </p>
        <Switch checked={viewMode === "info"} onChange={toggleViewMode} />
        <i>
          <AddIcon />
        </i>
        <i>
          <AttachFileIcon />
        </i>
        <i>
          <MoreVertIcon />
        </i>
      </div>
    </div>
  );
};

TopBar.propTypes = {
  onBackClick: PropTypes.func,
  viewMode: PropTypes.string,
  toggleViewMode: PropTypes.func,
};

export default TopBar;
