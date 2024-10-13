import React from "react";
import { IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

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
        button={!blocked}
        disabled={blocked}
        onClick={!blocked ? onClick : null}
      >
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

export default RecommendationItem;
