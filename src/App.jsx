import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home.jsx";
import Sell from "./components/Sell.jsx";
// import { getItems } from "../Api.jsx";
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
  useEffect(() => getItems(), []);

  const [categories, setCategories] = useState([]);

  const getCategories = () => {
    axios
      .get("https://nc-marketplace-sem-2.onrender.com/api/categories")
      .then((categoriesData) => {
        const allCategories = categoriesData.data.categories;
        setCategories(allCategories);
      });
  };

  useEffect(() => getCategories(), []);

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Home items={items} categories={categories} />}
        />
        <Route
          path="/account/sell"
          element={<Sell categories={categories} />}
        />
      </Routes>
    </div>
  );
}

export default App;

//route is displayed to user, but behind the scenes the api request will be to what is in the api
//if you make components dry enough they can be resuable for various endpoiunts

// const [items, setItems] = useState([]);

//   const getItems = () => {
//     axios
//       .get("https://nc-marketplace-sem-2.onrender.com/api/items")
//       .then((itemsData) => {
//         const allItems = itemsData.data.items;
//         setItems(allItems);
//       });
//   };
//   useEffect(() => getItems(), []);

//   const [categories, setCategories] = useState([]);

//   const getCategories = () => {
//     axios
//       .get("https://nc-marketplace-sem-2.onrender.com/api/categories")
//       .then((categoriesData) => {
//         const allCategories = categoriesData.data.categories;
//         setCategories(allCategories);
//       });
//   };

//   useEffect(() => getCategories(), []);
