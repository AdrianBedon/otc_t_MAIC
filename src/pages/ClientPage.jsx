import React, { useContext, useState } from "react";
import SearchBar from "../components/SearchBar";
import ClientList from "../components/ClientList";
import ClientInfo from "./ClientInfo";
import ClientDetails from "./ClientDetails";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { ScoringContext } from "../context/ScoringContext";

const options = [
  { text: "Adelanto", icon: <CheckCircleOutlineIcon /> },
  { text: "Tramo 0", icon: <AccessTimeIcon /> },
  { text: "Tramo 30", icon: <ArrowBackIosIcon /> },
  { text: "Tramo 60", icon: <ArrowForwardIosIcon /> },
];
const ClientPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const { selectedClient, resetSelectedClient, getScoringByPhone } =
    useContext(ScoringContext);

  const handleClientClick = async (client) => {
    await getScoringByPhone(client.numTelefono);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleBackToList = () => {
    resetSelectedClient();
  };

  const renderClientSection = () => {
    if (selectedClient) {
      if (sessionStorage.getItem("roles") === "Application.Read") {
        return <ClientInfo client={selectedClient} onBack={handleBackToList} />;
      } else {
        return (
          <ClientDetails client={selectedClient} onBack={handleBackToList} />
        );
      }
    } else {
      return (
        <>
          <SearchBar handleSearchChange={setSearchQuery} />
          <div className="categories-container">
            {options.map((option) => (
              <button
                className="button-option"
                key={option.text}
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

export default ClientPage;
