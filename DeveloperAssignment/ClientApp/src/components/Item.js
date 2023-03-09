import React, { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { AppContext } from "../context/AppContext";
import { FormatMoney } from "../Utils/General";
import axios from "axios";
import { base_url, routes, action_types } from "../Utils/constants";

const Item = (props) => {
  const { dispatch } = useContext(AppContext);

  // event handler for delete item from the list
  const handleDeleteItem = () => {
    try {
      axios
        .post(base_url + routes.DELETE_ITEM + props.itemId)
        .then((response) => {
          dispatch({
            type: action_types.DELETE_ITEM,
            payload: props.itemId,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (e) {
      console.log(e);
    }
  };

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  return (
    <div class="list-group">
      <a class="list-group-item d-flex justify-content-between align-items-center">
        {props.name}
        <div>
          <span class="badge bg-primary  mr-3">{FormatMoney(props.cost)}</span>
          <TiDelete size="1.5em" color="red" onClick={handleDeleteItem} />
        </div>
      </a>
    </div>
  );
};

export default Item;
