import { useState } from "react";

const StarRating = ({ stars, defaultRating }) => {
  const [filledStars, setFilledStars] = useState(defaultRating);

  const array = new Array(stars);
  const starArray = array.fill("⚪️");

  function handleClick(index) {
    setFilledStars(index + 1);
  }

  return (
    <div className="main-container">
      <h1>Star Rating</h1>
      <div className="sub-container">
        {starArray.map((star, index) => (
          <div
            key={index}
            className="star-container"
            onClick={() => handleClick(index)}
          >
            {filledStars > index ? "🟡" : star}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StarRating;
