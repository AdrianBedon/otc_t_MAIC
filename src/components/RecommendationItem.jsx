import React, { useState } from "react";
import { Modal, Box, Typography, Button } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PropTypes from "prop-types";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "8px",
  boxShadow: 24,
  p: 4,
};

const RecommendationItem = ({ data, onUpdate }) => {
  const [open, setOpen] = useState(false);
  const [selectedRecommendation, setSelectedRecommendation] = useState(null);
  const [feedback, setFeedback] = useState(selectedRecommendation?.feedback);

  const handleOpen = (recommendation) => {
    setSelectedRecommendation(recommendation);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedRecommendation(null);
  };

  const handleConfirm = async () => {
    if (!selectedRecommendation) return;

    const updatedRecommendation = {
      ...selectedRecommendation,
      use: 1, // Set the flag to indicate the recommendation is used
    };

    // Simulate a PUT request
    try {
      const response = await fetch(
        `http://localhost:8080/api/scoring/nba-nbc/${updatedRecommendation.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedRecommendation),
        }
      );

      if (response.ok) {
        onUpdate(updatedRecommendation);
      } else {
        console.error("Failed to update recommendation");
      }
    } catch (error) {
      console.error("Error during update:", error);
    } finally {
      handleClose();
    }
  };

  const handleFeedbackClick = async (recommendation) => {
    const updatedRecommendation = {
      ...recommendation,
      feedback: feedback === 0 ? 1 : 0, // Toggle feedback value
    };

    try {
      const response = await fetch(
        `http://localhost:8080/api/scoring/nba-nbc/${updatedRecommendation.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedRecommendation),
        }
      );

      if (response.ok) {
        setFeedback(updatedRecommendation.feedback);
        onUpdate(updatedRecommendation); // Notify parent about the update
      } else {
        console.error("Failed to update recommendation");
      }
    } catch (error) {
      console.error("Error during update:", error);
    }
  };

  return (
    <>
      {data
        .sort((a, b) => a.order - b.order)
        .map((recommendation) => (
          <div
            key={recommendation.id}
            className={
              recommendation.use === 1
                ? "recommendation-option-disabled"
                : "recommendation-option"
            }
            data-order={recommendation.order}
          >
            <button
              className="recommendation-item"
              disabled={recommendation.use === 1}
              onClick={() => handleOpen(recommendation)}
            >
              <i>{recommendation.channel}</i>
              Se usará {recommendation.channel} para contactar al cliente
              <label className="recommendation-details">
                {recommendation.action}
              </label>
            </button>

            <div className="recommendation-opinion">
              <label className="question-opinion">
                ¿Te fue útil esta recomendación?
              </label>
              <button
                className="btn-feedback"
                onClick={() => handleFeedbackClick(recommendation)}
              >
                {recommendation.feedback === 1 ? (
                  <FavoriteIcon color="error" />
                ) : (
                  <FavoriteBorderIcon />
                )}
              </button>
            </div>
          </div>
        ))}

      {selectedRecommendation && (
        <Modal open={open} onClose={handleClose}>
          <Box sx={modalStyle}>
            <Typography variant="h6">{`Acción: ${selectedRecommendation.action}`}</Typography>
            <Typography sx={{ mt: 2, whiteSpace: "pre-line" }}>
              {`Se utilizará el canal ${selectedRecommendation.channel} para la acción: ${selectedRecommendation.action}.`}
            </Typography>
            <Box mt={3} textAlign="center">
              <Button
                variant="contained"
                color="primary"
                onClick={handleConfirm}
              >
                Confirmar
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={handleClose}
                sx={{ ml: 2 }}
              >
                Cerrar
              </Button>
            </Box>
          </Box>
        </Modal>
      )}
    </>
  );
};

RecommendationItem.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      numTelefono: PropTypes.string.isRequired,
      probAccion: PropTypes.number.isRequired,
      channel: PropTypes.string.isRequired,
      action: PropTypes.string.isRequired,
      use: PropTypes.number.isRequired,
      order: PropTypes.number.isRequired,
      feedback: PropTypes.number.isRequired,
    })
  ).isRequired,
  onUpdate: PropTypes.func.isRequired, // Callback to update the data
};

export default RecommendationItem;
