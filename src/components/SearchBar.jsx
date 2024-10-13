import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import PropTypes from "prop-types";

const SearchBar = ({ handleSearchChange }) => {
  return (
    <label className="search_bar">
      <SearchIcon className="icon_search" />
      <input
        className="search_input"
        type="text"
        placeholder="Search Clients..."
        onChange={(e) => handleSearchChange(e.target.value)}
      />
    </label>
  );
};

SearchBar.propTypes = {
  handleSearchChange: PropTypes.func.isRequired,
};

export default SearchBar;
