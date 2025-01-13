import React from "react";
import RecommendationItem from "./RecommendationItem";
import PropTypes from "prop-types";

const RecommendationsList = ({ recommendations, liked, handleLikeClick, handleBlockClick, blocked, feedbackBlocked, client }) => {
  return (
    <div className="recommendation-list">
      {recommendations.map((recommendation, index) => (
        <RecommendationItem
          key={index}
          recommendation={recommendation}
          liked={liked[index]}
          onLikeClick={() => handleLikeClick(index)}
          onClick={() => handleBlockClick(index)}
          blocked={blocked[index]}
          feedbackBlocked={feedbackBlocked[index]}
          client={client} // Pasa el cliente aquí
        />
      ))}
    </div>
  );
};

RecommendationsList.propTypes = {
  recommendations: PropTypes.arrayOf(PropTypes.object).isRequired,
  liked: PropTypes.arrayOf(PropTypes.bool).isRequired,
  handleLikeClick: PropTypes.func.isRequired,
  handleBlockClick: PropTypes.func.isRequired,
  blocked: PropTypes.arrayOf(PropTypes.bool).isRequired,
  feedbackBlocked: PropTypes.arrayOf(PropTypes.bool).isRequired,
  client: PropTypes.object.isRequired,
};

export default RecommendationsList;
