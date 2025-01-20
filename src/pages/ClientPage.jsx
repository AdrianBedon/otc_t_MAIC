import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import ClientList from "../components/ClientList";
import PropTypes from "prop-types";
import ClientInfo from "./ClientInfo";
import ClientDetails from "./ClientDetails";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const options = [
  { text: "Adelanto", icon: <CheckCircleOutlineIcon /> },
  { text: "Tramo 0", icon: <AccessTimeIcon /> },
  { text: "Tramo 30", icon: <ArrowBackIosIcon /> },
  { text: "Tramo 60", icon: <ArrowForwardIosIcon /> },
];
const ClientPage = ({ viewMode }) => {
  const [selectedClient, setSelectedClient] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const handleClientClick = (client) => {
    setSelectedClient(client);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const renderClientSection = () => {
    if (selectedClient) {
      if (viewMode === "info") {
        return <ClientInfo client={selectedClient} />;
      } else {
        return <ClientDetails client={selectedClient} />;
      }
    } else {
      return (
        <>
          <SearchBar handleSearchChange={setSearchQuery} />
          <div className="categories-container">
            {options.map((option) => (
              <button
                className="button-option"
                key={option}
                value={option.text}
                onClick={handleOptionChange}
              >
                <i>{option.icon}</i>
                {option.text}
              </button>
            ))}
          </div>
          <ClientList
            searchQuery={searchQuery}
            category={selectedOption}
            onClientClick={handleClientClick}
          />
        </>
      );
    }
  };

  return <div className="client-list-page">{renderClientSection()}</div>;
};

ClientPage.propTypes = {
  viewMode: PropTypes.string,
};

export default ClientPage;
