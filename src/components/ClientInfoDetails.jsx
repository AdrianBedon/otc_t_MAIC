import React from "react";
import ClientDetailItem from "./ClientDetailItem";
import PropTypes from "prop-types";
import { AttachMoney, Gavel, PermIdentity, Smartphone } from "@mui/icons-material";

const ClientDetails = ({ phone, id, portfolioPunishment, creditLimit }) => {
  return (
    <div className="grid_idetails">
      <div className="idetials_1">
        <ClientDetailItem
          label="Número de teléfono: "
          value={phone}
          icon={<Smartphone />}
        />
      </div>
      <div className="idetails_2">
        <ClientDetailItem
          label="Número de cédula: "
          value={id}
          icon={<PermIdentity />}
        />
      </div>
      <div className="idetails_3">
        <ClientDetailItem
          label="Castigo de cartera:"
          value={portfolioPunishment}
          icon={<Gavel />}
        />
      </div>
      <div className="idetails_4">
        <ClientDetailItem
          label="Límite de crédito:"
          value={creditLimit}
          icon={<AttachMoney />}
        />
      </div>
    </div>
  );
};

ClientDetails.propTypes = {
  phone: PropTypes.string,
  id: PropTypes.number,
  portfolioPunishment: PropTypes.string,
  creditLimit: PropTypes.number,
};

export default ClientDetails;
