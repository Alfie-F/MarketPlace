import axios from "axios";
import React, { useEffect, useState } from "react";

const getItems = () => {
  axios
    .get("https://nc-marketplace-sem-2.onrender.com/api/items")
    .then((itemsData) => {
      console.log(itemsData);
      const allItems = itemsData.data;
      setItems(allItems);
    });
};

export default { getItems };
