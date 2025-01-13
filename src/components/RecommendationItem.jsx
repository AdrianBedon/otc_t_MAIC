import React, { useState } from "react";
import { Modal, Box, Typography, Button, IconButton } from "@mui/material";
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

const RecommendationItem = ({ recommendation, liked, onLikeClick, blocked, onClick, client }) => {
  const [open, setOpen] = useState(false);
  const [isBlocked, setIsBlocked] = useState(blocked); // Local state para bloquear tras confirmar

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleConfirm = () => {
    setIsBlocked(true); // Bloquear la opción
    onClick(); // Ejecutar la función de bloqueo en `RecommendationsList`
    handleClose(); // Cerrar modal
  };

  const getMessage = (type) => {
    const { name = "Cliente", creditLimit = 0, dueDate = "31/01/2025" } = client; // Valores por defecto
    if (type === "Correo electrónico") {
      return `Estimado/a ${name},\n\nLe recordamos que su cuenta presenta un saldo pendiente de $${creditLimit.toFixed(
        2
      )} con vencimiento el ${dueDate}.\n\nAtentamente,\n[Nombre del Gestor]`;
    }
    if (type === "Mensaje de texto") {
      return `Estimado/a ${name}, le recordamos que su pago de $${creditLimit.toFixed(
        2
      )} vence el ${dueDate}. ¡Gracias!`;
    }
    if (type === "Llamada telefónica") {
      return `Hola ${name}, le habla [Tu Nombre] de [Nombre de la Empresa]. Tiene un saldo pendiente de $${creditLimit.toFixed(
        2
      )} con vencimiento el ${dueDate}. ¿Podemos enviarle más información?`;
    }
    return "";
  };

  return (
    <div className="recommendation-option">
      <button className="recommendation-item" disabled={isBlocked} onClick={handleOpen}>
        <i>{recommendation.icon}</i>
        {recommendation.type}
        <label className="recommendation-details">{recommendation.detail}</label>
      </button>

      <div className="recommendation-opinion">
        <label className="question-opinion">¿Te fue útil esta recomendación?</label>
        <IconButton onClick={onLikeClick}>
          {liked ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
        </IconButton>
      </div>

      {/* Modal con mensaje personalizado */}
      <Modal open={open} onClose={handleClose}>
        <Box sx={modalStyle}>
          <Typography variant="h6">{`Acción: ${recommendation.type}`}</Typography>
          <Typography sx={{ mt: 2, whiteSpace: "pre-line" }}>{getMessage(recommendation.type)}</Typography>
          <Box mt={3} textAlign="center">
            <Button variant="contained" color="primary" onClick={handleConfirm}>
              Confirmar
            </Button>
            <Button variant="outlined" color="secondary" onClick={handleClose} sx={{ ml: 2 }}>
              Cerrar
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

RecommendationItem.propTypes = {
  recommendation: PropTypes.object.isRequired,
  liked: PropTypes.bool.isRequired,
  onLikeClick: PropTypes.func.isRequired,
  blocked: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired, // Para manejar el bloqueo desde `RecommendationsList`
  client: PropTypes.shape({
    name: PropTypes.string,
    creditLimit: PropTypes.number,
    dueDate: PropTypes.string,
  }).isRequired,
};

export default RecommendationItem;
