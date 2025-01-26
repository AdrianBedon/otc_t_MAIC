import React from "react";
import ClientDetailItem from "./ClientDetailItem";
import PropTypes from "prop-types";
import { AttachMoney, Smartphone } from "@mui/icons-material";
import GaugeChart from "react-gauge-chart";

const ClientDetails = ({ client }) => {
  const determineGroup = () => {
    if (client.adelantaPago === 1) return "Adelanta tu Pago";
    if (client.tramo0 === 1) return "Tramo 0";
    if (client.tramo30 === 1) return "Tramo 30";
    if (client.tramo60 === 1) return "Tramo 60";
  };
  return (
    <div className="grid-details">
      <div className="gauge-area">
        <h2 className="gauge-title">Gauge Index</h2>
        <GaugeChart
          className="gauge-chart"
          percent={Number(client.gauge) / 1000}
          textColor="#000000"
          colors={["#FF0000", "#00FF00"]}
          style={{ width: "100%" }}
          nrOfLevels={5}
          formatTextValue={(value) => value * 10}
        />
      </div>
      <div className="client-details">
        <ClientDetailItem
          label="Número de teléfono"
          value={client.numTelefono}
          icon={<Smartphone />}
        />
        <ClientDetailItem
          label="Tramo de Mora"
          value={determineGroup()}
          icon={<AttachMoney />}
        />
      </div>
      <div className="veritas-area">
        <h2 className="veritas-title">Veritas Index</h2>
        <p className="veritas-score">{client.veritas}</p>
      </div>
    </div>
  );
};

ClientDetails.propTypes = {
  client: PropTypes.object.isRequired,
};

export default ClientDetails;
