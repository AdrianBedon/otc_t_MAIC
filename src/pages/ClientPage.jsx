import React, { useContext, useState } from "react";
import SearchBar from "../components/SearchBar";
import ClientList from "../components/ClientList";
import ClientInfo from "./ClientInfo";
import ClientDetails from "./ClientDetails";
import { ScoringContext } from "../context/ScoringContext";
import {
  AssignmentLateOutlined,
  EventBusyOutlined,
  Payment,
  Replay,
  WatchLater,
} from "@mui/icons-material";

const options = [
  { text: "Adelanta tu Pago", icon: <Payment /> },
  { text: "Tramo 0", icon: <WatchLater /> },
  { text: "Tramo 30", icon: <AssignmentLateOutlined /> },
  { text: "Tramo 60", icon: <EventBusyOutlined /> },
  { text: "Restablecer Filtro", icon: <Replay /> },
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
                <i className="icon-btn">{option.icon}</i>
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
