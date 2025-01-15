import React, { useContext, useEffect } from "react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import PropTypes from "prop-types";
import { ScoringContext } from "../context/ScoringContext";

//   {
//     id: 1777777777,
//     name: "Marco Aurelio",
//     status: "Cercano a 90 días de deuda",
//     risk: "high",
//     phone: "0999999999",
//     icon: <RemoveCircleOutlineIcon />,
//   },
//   {
//     name: "Sofía Arteaga",
//     status: "Cercano a 90 días de deuda",
//     risk: "high",
//     phone: "0899999999",
//     icon: <RemoveCircleOutlineIcon />,
//   },
//   {
//     name: "Juan Torres",
//     status: "Cercano a 60 días de deuda",
//     risk: "medium",
//     icon: <ArrowDropDownIcon />,
//   },
//   {
//     name: "Alejandro Ordoñez",
//     status: "Entrado a 30 días de deuda",
//     risk: "low",
//     icon: <ArrowDropUpIcon />,
//   },
//   {
//     name: "María Flores",
//     status: "Entrado a 30 días de deuda",
//     risk: "low",
//     icon: <ArrowDropUpIcon />,
//   },
// ];

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
        (client.num_telefono && client.num_telefono.includes(query))
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
                <label className="client_status">{client.num_telefono}</label>
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
