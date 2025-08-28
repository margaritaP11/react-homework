import React, { useState } from "react";
import "../style/Rating.css";

const Rating = () => {
  const [retingValue, newRetingValue] = useState(0);
  const ratingList = [
    "https://www.clipartmax.com/middle/m2i8H7A0A0Z5A0K9_5-star-rating-png",

    "https://www.clipartmax.com/png/small/67-676956_out-of-3-out-of-5-star-rating.png",

    "https://www.clipartmax.com/png/small/73-731815_stars-clipart-2-5-star-rating.png",

    "https://www.clipartmax.com/png/small/297-2970338_rating-2-out-of-5-gold-stars.png",
  ];
  return (
    <div style={{ padding: "25px" }}>
      <img
        src={ratingList[retingValue]}
        alt="Рейтинг"
        style={{ width: "500px", height: "200px", marginBottom: "20px" }}
      
      />
      <div>
        <button onClick={() => newRetingValue(3)}>Плохо</button>
        <button onClick={() => newRetingValue(2)}>Примерно</button>
        <button onClick={() => newRetingValue(1)}> Хорошо</button>
        <button onClick={() => newRetingValue(0)}>Отлично</button>
      </div>
    </div>
  );
};
export default Rating;
