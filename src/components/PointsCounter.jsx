import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPoint } from "../features/score/scoreSlice";

const PointsCounter = () => {
  const dispatch = useDispatch();
  const points = useSelector((state) => state.point.points);

  const handleButtonClick = () => {
    dispatch(addPoint());
  };

  return (
    <div>
      <p>Score: {points}</p>
      <button onClick={handleButtonClick}>Increase Score</button>
    </div>
  );
};

export default PointsCounter;
