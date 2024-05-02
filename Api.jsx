import axios from "axios";
import React, { useEffect, useState } from "react";

const getItems = () => {
  axios
    .get("https://nc-marketplace-sem-2.onrender.com/api/items")
    .then((itemsData) => {
      const allItems = itemsData.data.items;
      return setItems(allItems);
    });
};

export default getItems;

// https://nc-marketplace-sem-2.onrender.com/api/
// base url

// const getItemsHandler = setItems().then(() => {
//   console.log(items);
// });
// getItemsHandler();
