import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { FormatMoney } from "../Utils/General";

const TotalCost = () => {
  // calculate total cost of items
  const { items } = useContext(AppContext);
  const total = items.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  // render total cost of items
  return (
    <div class="alert alert-primary p-4">
      <span>Total Cost: {FormatMoney(total)}</span>
    </div>
  );
};

export default TotalCost;
