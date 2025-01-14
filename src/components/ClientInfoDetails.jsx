import React from "react";
import ClientDetailItem from "./ClientDetailItem";
import PropTypes from "prop-types";
import { AttachMoney, Gavel, PermIdentity, Smartphone } from "@mui/icons-material";

const ClientDetails = ({ num_telefono, cedula, gauge, veritas }) => {
  return (
    <div className="grid_idetails">
      <div className="idetials_1">
        <ClientDetailItem
          label="Número de teléfono: "
          value={num_telefono}
          icon={<Smartphone />}
        />
      </div>
      <div className="idetails_2">
        <ClientDetailItem
          label="Número de cédula: "
          value={cedula}
          icon={<PermIdentity />}
        />
      </div>
      <div className="idetails_3">
        <ClientDetailItem
          label="Gauge Index:"
          value={gauge}
          icon={<Gavel />}
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
  );
};

ClientDetails.propTypes = {
  num_telefono: PropTypes.string,
  cedula: PropTypes.number,
  portfolioPunishment: PropTypes.string,
  creditLimit: PropTypes.number,
};

export default ClientDetails;
