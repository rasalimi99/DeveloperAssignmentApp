import React, { useContext, useState, useEffect, useRef } from "react";
import Item from "./Item";
import { AppContext } from "../context/AppContext";
import { FormatMoney } from "../Utils/General";
import { FetchCategories } from "../context/Categories";
import axios from "axios";
import { base_url, routes, action_types } from "../Utils/constants";

const ItemList = () => {
  // initialization
  const { items, dispatch } = useContext(AppContext);
  const [recordsPerPage, setRecordsPerPage] = useState(10);
  const [filteredItems, setfilteredItems] = useState(items || []);
  const [filteredCategories, setfilteredCategories] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const elementRef = useRef(null);

  // function for intersection
  function onIntersection(entries) {
    const firstEntry = entries[0];
    if (firstEntry.isIntersecting && hasMore) {
      loadMoreItems();
    }
  }

  // change items state based on action
  useEffect(() => {
    setfilteredItems(items);
    setfilteredCategories(FetchCategories(items));
    const observer = new IntersectionObserver(onIntersection);
    if (observer && elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [items]);

  // handler for searching item from the list
  const handleChange = (event) => {
    const searchResults = items.filter((filteredItem) =>
      filteredItem.name.toLowerCase().includes(event.target.value)
    );
    setfilteredItems(searchResults);
  };

  // async function for fetching items from db by accessing the api
  // load data when user scrolling
  // in each page 10 row will be showing to the user
  const loadMoreItems = async () => {
    try {
      axios
        .get(
          base_url +
            routes.FETCH_ITEMS_FILTER +
            `?recordsPerPage=${recordsPerPage}&page=${page}`
        )
        .then((response) => {
          if (response.data.length == 0) {
            setHasMore(false);
          } else {
            setPage((prevPage) => prevPage + 1);
            dispatch({ type: action_types.LOAD_MORE_ITEMS, payload: response.data });
          }
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
    <>
      <input
        type="text"
        class="form-control mb-2 mr-sm-2"
        placeholder="Type to search..."
        onChange={handleChange}
      />

      <div class="just-padding">
        <div class="list-group list-group-root well mt-3 mb-3">
          {filteredCategories.map((item, i) => {
            return (
              <>
                <a
                  key={i}
                  class="list-group-item list-group-item-primary d-flex justify-content-between align-items-center font-weight-bold"
                >
                  {item.categoryName}

                  <div>
                    <span class="mr-5 font-weight-bold ">
                      {FormatMoney(item.cost)}
                    </span>
                  </div>
                </a>
                <div class="list-group">
                  {filteredItems
                    .filter(
                      (subElement) => subElement.categoryId === item.categoryId
                    )
                    .map((item) => (
                      <Item
                        itemId={item.itemId}
                        name={item.name}
                        cost={item.cost}
                        categoryId={item.categoryId}
                      />
                    ))}
                </div>
              </>
            );
          })}

          {hasMore && <div ref={elementRef}>Load more items</div>}
        </div>
      </div>
    </>
  );
};

export default ItemList;
