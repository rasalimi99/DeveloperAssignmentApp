// return categories by filtering items list
export const FetchCategories = (ItemsArray) => {
  let result = ItemsArray.reduce(
    function (acc, obj) {
      if (acc.map.hasOwnProperty(obj.categoryId)) {
        acc.map[obj.categoryId].cost += +obj.cost;
      } else {
        var newObj = Object.assign(
          {},
          {
            categoryId: obj.categoryId,
            categoryName: obj.categoryName,
            cost: obj.cost,
          }
        );

        acc.map[obj.categoryId] = newObj;
        acc.data.push(newObj);
      }
      return acc;
    },
    { data: [], map: {} }
  ).data;

  return result;
};
