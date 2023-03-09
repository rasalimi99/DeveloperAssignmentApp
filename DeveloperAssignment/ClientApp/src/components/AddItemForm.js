import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { base_url, routes, action_types } from "../Utils/constants";

const AddItemForm = (props) => {
  // initialization
  const { dispatch, categories } = useContext(AppContext);
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const [categoryId, setCategoryId] = useState("");

  // event handler for add item
  const onSubmit = (event) => {
    event.preventDefault();

	// fetch entered data from the user 
    const item = {
      name,
      cost: parseInt(cost),
      categoryId: parseInt(categoryId),
    };

    try {
      axios
        .post(base_url + routes.Add_ITEM, item)
        .then((response) => {
          dispatch({
            type: action_types.ADD_ITEM,
            payload: item,
          });

          // reset useStates
          setName("");
          setCost("");
          setCategoryId("");
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (e) {
      console.log(e);
    }
  };

  // return result
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  return (
    <form onSubmit={onSubmit}>
      <div class="row">
        <div class="col-sm col-lg-12">
          <label for="name">Name</label>
          <input
            required="required"
            type="text"
            class="form-control"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div class="col-sm col-lg-12">
          <label for="cost">Cost</label>
          <input
            required="required"
            type="number"
            class="form-control"
            id="cost"
            value={cost}
            onChange={(event) => setCost(event.target.value)}
          />
        </div>

        <div class="col-sm col-lg-12">
          <label for="cost">Category</label>
          <select
            className="form-control"
            id="categoryId"
            value={categoryId}
            onChange={(e) => {
              setCategoryId(e.target.value);
            }}
          >
            <option> Select User </option>
            {categories.map((item, i) => (
              <option key={i} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-sm d-flex justify-content-center">
          <button type="submit" class="btn btn-primary">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddItemForm;
