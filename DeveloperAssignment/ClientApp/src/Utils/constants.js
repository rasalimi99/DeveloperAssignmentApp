// base url for our web api
const base_url = "http://" + window.location.host + "/api/";

// declare and initialize const for our routes
const routes = {
  Add_ITEM: "items/PostItem",
  FETCH_ITEMS: "items/GetItems",
  DELETE_ITEM: "items/DeleteItem/",
  FETCH_ITEMS_FILTER: "items/GetItems",
};

// declare and initialize const for our action types
const action_types = {
  FETCH_ITEMS: "FETCH_ITEMS",
  LOAD_MORE_ITEMS: "LOAD_MORE_ITEMS",
  ADD_ITEM: "ADD_ITEM",
  DELETE_ITEM: "DELETE_ITEM",
};

// export above constants
export { base_url, routes, action_types };
