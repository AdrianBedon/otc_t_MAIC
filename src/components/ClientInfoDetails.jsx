import React from "react";
import ClientDetailItem from "./ClientDetailItem";
import PropTypes from "prop-types";
import { AttachMoney, PermIdentity, Smartphone } from "@mui/icons-material";
import GaugeChart from "react-gauge-chart";

const ClientDetails = ({ num_telefono, cedula, gauge, veritas }) => {
  return (
    <div className="grid_idetails">
      <div className="idetails_1">
        <GaugeChart
          className="gauge_chart"
          percent={Number(gauge) / 1000}
          textColor="#000000"
          colors={["#FF0000", "#00FF00"]}
          style={{ width: "100%" }}
          formatTextValue={value=>value*10}
        />
      </div>
      <div className="details_right">
        <div className="idetials_2">
          <ClientDetailItem
            label="Número de teléfono: "
            value={num_telefono}
            icon={<Smartphone />}
          />
        </div>
        <div className="idetails_3">
          <ClientDetailItem
            label="Número de cédula: "
            value={cedula}
            icon={<PermIdentity />}
          />
        </div>
        <div className="idetails_4">
          <ClientDetailItem
            label="Veritas Index:"
            value={veritas}
            icon={<AttachMoney />}
          />
        </div>
      </div>
    </div>
  );
};

ClientDetails.propTypes = {
  num_telefono: PropTypes.string,
  cedula: PropTypes.string,
  portfolioPunishment: PropTypes.string,
  creditLimit: PropTypes.number,
};

export default ClientDetails;
