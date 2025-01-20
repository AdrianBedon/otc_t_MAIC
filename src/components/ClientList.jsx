import React, { useContext, useEffect } from "react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import PropTypes from "prop-types";
import { ScoringContext } from "../context/ScoringContext";

const ClientList = ({ searchQuery, category, onClientClick }) => {
  const { scoring, getScoring } = useContext(ScoringContext);

  useEffect(() => {
    getScoring();
  }, []);

  const filteredClients = scoring
    .filter((client) => {
      const query = searchQuery.toLowerCase();
      return (
        client.nombre.toLowerCase().includes(query) ||
        (client.numTelefono && client.numTelefono.includes(query))
      );
    })
    .filter((client) => {
      if (!category) return true;
      if (category === "Tramo 60" && client.tramo60 === "1") return true;
      if (category === "Adelanto") return true;
      if (category === "Tramo 30" && client.tramo30 === "1") return true;
      if (category === "Tramo 0" && client.tramo0 === "1") return true;
      return false;
    });

  return (
    <nav className="container_clients">
      <ul className="client_list">
        {filteredClients.length > 0 ? (
          filteredClients.map((client, index) => (
            <li
              key={index}
              className="client_item"
              onClick={() => onClientClick(client)}
            >
              <i className="client_icon">{client.icon}</i>
              <div className="client_info">
                <label className="client_name">{client.nombre}</label>
                <label className="client_status">{client.numTelefono}</label>
              </div>
            </li>
          ))
        ) : (
          <div className="alert_clients">No clients found.</div>
        )}
      </ul>
    </nav>
  );
};

ClientList.propTypes = {
  searchQuery: PropTypes.string,
  category: PropTypes.string,
  onClientClick: PropTypes.func,
};

export default ClientList;
