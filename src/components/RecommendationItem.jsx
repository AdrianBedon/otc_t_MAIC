import React from "react";
import { IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PropTypes from "prop-types";

const RecommendationItem = ({
  recommendation,
  liked,
  onLikeClick,
  blocked,
  onClick,
}) => {
  return (
    <div className="recommendation-option">
      <button
        className="recommendation-item"
        disabled={blocked}
        onClick={!blocked ? onClick : null}
      >
        <i>{recommendation.icon}</i>
        {recommendation.type}
        <label className="recommendation-details">
          {recommendation.detail}
        </label>
      </button>
      <div className="recommendation-opinion">
        <label className="question-opinion">
          ¿Te fue útil esta recomendación?
        </label>
        <IconButton onClick={onLikeClick}>
          {liked ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
        </IconButton>
      </div>
    </div>
  );
};

RecommendationItem.propTypes = {
  recommendation: PropTypes.object,
  liked: PropTypes.bool,
  onLikeClick: PropTypes.func,
  blocked: PropTypes.bool,
  onClick: PropTypes.func,
};

export default RecommendationItem;
