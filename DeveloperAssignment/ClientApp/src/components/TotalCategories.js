import React, { useContext, useState, useEffect } from "react";
import Item from "./Item";
import { AppContext } from "../context/AppContext";
import { CountArrayItems } from "../Utils/General";
import { FetchCategories } from "../context/Categories";

const TotalCategories = () => {
  // calculate total categories
  const { items } = useContext(AppContext);
  let TotalItemInArray = CountArrayItems(FetchCategories(items));

  // render categories
  return (
    <div class="alert alert-secondary p-4 ">
      <span>Total Category: {TotalItemInArray}</span>
    </div>
  );
};

export default TotalCategories;
