import React from "react";
import RecommendationItem from "./RecommendationItem";
import PropTypes from "prop-types";

const RecommendationsList = ({
  recommendations,
  liked,
  handleLikeClick,
  handleBlockClick,
  blocked,
  feedbackBlocked,
}) => {
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
        />
      ))}
    </div>
  );
};

RecommendationsList.propTypes = {
  recommendations: PropTypes.arrayOf(PropTypes.object),
  liked: PropTypes.arrayOf(PropTypes.bool),
  handleLikeClick: PropTypes.func,
  handleBlockClick: PropTypes.func,
  blocked: PropTypes.arrayOf(PropTypes.bool),
  feedbackBlocked: PropTypes.arrayOf(PropTypes.bool),
};

export default RecommendationsList;
