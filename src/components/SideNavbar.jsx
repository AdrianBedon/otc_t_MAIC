import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PropTypes from "prop-types";

const SideNavbar = ({ handleCategoryChange }) => {
  // Array de opciones con texto e iconos correspondientes
  const options = [
    { text: "Adelanto", icon: <CheckCircleOutlineIcon /> },
    { text: "Tramo 0", icon: <AccessTimeIcon /> },
    { text: "Tramo 30", icon: <ArrowBackIosIcon /> },
    { text: "Tramo 60", icon: <ArrowForwardIosIcon /> },
  ];

  return (
    // Renderiza un contenedor <div> que actúa como barra de navegación lateral.
    // El contenedor tiene un ancho fijo de 200px y una altura que cubre el 100% de la ventana (viewport).
    <div className="side_nav">
      <ul className="side_nav_list">
        {options.map((option, index) => (
          <li
            className="item_side_nav"
            key={index}
            onClick={() => handleCategoryChange(option.text)}
          >
            <i className="item_list_icon">{option.icon}</i>
            {option.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

SideNavbar.propTypes = {
  handleCategoryChange: PropTypes.func.isRequired,
};

export default SideNavbar;
