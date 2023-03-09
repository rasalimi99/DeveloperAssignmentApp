import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

import { AppProvider } from "./context/AppContext";
import TotalCategories from "./components/TotalCategories";
import TotalCost from "./components/TotalCost";
import ItemList from "./components/ItemList";
import AddItemForm from "./components/AddItemForm";
import TotalItems from "./components/TotalItems";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <AppProvider>
      <div className="container-fluid">
        <div className="row">
          <Navbar />
        </div>
        <div className="row ">
          <div className="col-sm-4  add-item-form-padding">
            <div className="row  mt-5 center-div-elements add-item-form ">
              <div className="col-sm-10 text-center ">
                <h3 className="mt-3">Add Item</h3>
              </div>
              <div className="col-sm-10">
                <AddItemForm />
              </div>
            </div>

            <div className="row position-fixed mt-3 ">
              <div className="col-sm-10">
                <TotalCategories />
              </div>
              <div className="col-sm-10">
                <TotalItems />
              </div>
              <div className="col-sm-10">
                <TotalCost />
              </div>
            </div>
          </div>

          <div className="col-sm-8  mt-3">
            <h3 className="mt-3">Search item</h3>
            <div className="row ">
              <div className="col-sm">
                <ItemList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppProvider>
  );
};

export default App;
