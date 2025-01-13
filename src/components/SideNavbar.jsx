import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LogoutIcon from "@mui/icons-material/Logout"; // Icon for logout
import PropTypes from "prop-types";

const SideNavbar = ({ handleCategoryChange, handleLogout }) => {
  const options = [
    { text: "Adelanto", icon: <CheckCircleOutlineIcon /> },
    { text: "Tramo 0", icon: <AccessTimeIcon /> },
    { text: "Tramo 30", icon: <ArrowBackIosIcon /> },
    { text: "Tramo 60", icon: <ArrowForwardIosIcon /> },
  ];

  return (
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

        {/* Logout button */}
        <li className="item_side_nav logout_item" onClick={handleLogout}>
          <i className="item_list_icon">
            <LogoutIcon />
          </i>
          Logout
        </li>
      </ul>
    </div>
  );
};

SideNavbar.propTypes = {
  handleCategoryChange: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired,
};

export default SideNavbar;
