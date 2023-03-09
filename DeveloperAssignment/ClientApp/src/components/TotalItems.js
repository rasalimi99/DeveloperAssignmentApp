import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { CountArrayItems } from "../Utils/General";

//calculate total items
const TotalItems = () => {
  const { items } = useContext(AppContext);
  let TotalItemInArray = CountArrayItems(items);
  const alertType = TotalItemInArray == 0 ? "alert-danger" : "alert-success";

  // render total items
  return (
    <div class={`alert p-4 ${alertType}`}>
      <span>Total Items: {TotalItemInArray}</span>
    </div>
  );
};

export default TotalItems;
