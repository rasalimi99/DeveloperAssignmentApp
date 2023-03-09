import React, { createContext, useReducer } from "react";
import { base_url, routes, action_types } from "../Utils/constants";

// 5. The reduceer - this is used to update the state, based on the action
export const AppReducer = (state, action) => {
  switch (action.type) {
    case action_types.LOAD_MORE_ITEMS:
      return {
        ...state,
        items: state.items.concat(action.payload),
      };
    case action_types.ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case action_types.DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item.itemId !== action.payload),
      };

    default:
      return state;
  }
};

// 1. Sets the initial state when the app loads
const initialState = {
  budget: 2000,
  items: [],
  categories: [
      { id: 1, name: "Electronics" },
      { id: 2, name: "Clothing" },
      { id: 3, name: "Smart Phone" },
  ],
};

// 2. Creates the context this is the thing our components import and use to get the state
export const AppContext = createContext();

// 3. Provider component - wraps the components we want to give access to the state
// Accepts the children, which are the nested(wrapped) components
export const AppProvider = (props) => {
  // 4. Sets up the app state. takes a reducer, and an initial state
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // 5. Returns our context. Pass in the values we want to expose
  return (
    <AppContext.Provider
      value={{
        items: state.items,
        budget: state.budget,
        categories: state.categories,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
