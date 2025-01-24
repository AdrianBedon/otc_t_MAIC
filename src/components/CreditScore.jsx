import React from "react";
import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";

const CreditScore = ({ score }) => {
  return (
    <Box mt={4} textAlign="center">
      <Typography variant="h6">Calificación crediticia</Typography>
      <Typography variant="h1" style={{ fontSize: "80px", fontWeight: "bold" }}>
        {score}
      </Typography>
    </Box>
  );
};

CreditScore.propTypes = {
  score: PropTypes.number,
};

export default CreditScore;
