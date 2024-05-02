import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home.jsx";
// import { getItems } from "../api.js";
import axios from "axios";

function App() {
  const [items, setItems] = useState([]);

  const getItems = () => {
    axios
      .get("https://nc-marketplace-sem-2.onrender.com/api/items")
      .then((itemsData) => {
        const allItems = itemsData.data.items;
        setItems(allItems);
      });
  };
  console.log(items);
  useEffect(() => getItems(), []);
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home items={items} />} />
      </Routes>
    </div>
  );
}

export default App;

//route is displayed to user, but behind the scenes the api request will be to what is in the api
//if you make components dry enough they can be resuable for various endpoiunts
