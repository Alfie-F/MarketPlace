import { useState, useEffect } from "react";

const Home = ({ items, categories }) => {
  const [cat, setCat] = useState();
  function changeCat(change) {
    console.log(change.target.value);
    setCat(change.target.value);
  }
  return (
    <>
      <nav>
        Welcome to - abay - in no way shape or form affiliated with any
        vowel-bay based buying and selling platforms.
      </nav>
      <nav id="categories">
        <label>Filter by category:</label>
        <select name="categories" id="categoriesDropDown" onChange={changeCat}>
          <option value="All">All</option>
          {categories.map((category) => {
            return (
              <option
                key={category.category_name}
                value={category.category_name}
              >
                {category.category_name}
              </option>
            );
          })}
        </select>
      </nav>
      <main>
        {items.map((item) => {
          console.log(cat);
          if (!cat || cat == "All") {
            return (
              <ul id="item.category_name">
                <li key={item.item_id} id="first">
                  {item.item_name}
                </li>
                <li key={item.item_id + 1000} id="second">
                  Category: {item.category_name}
                </li>
                <li key={item.item_id + 2000} id="third">
                  £{item.price}
                </li>
                <li
                  key={item.item_id + 3000}
                  id="pic"
                  width="40px"
                  height="220px"
                >
                  <img id="item" src={item.img_url} alt={item.item_name} />
                </li>
              </ul>
            );
          } else if (item.category_name === cat) {
            return (
              <ul id="item.category_name">
                <li key={item.item_id} id="first">
                  {item.item_name}
                </li>
                <li key={item.item_id + 1000} id="second">
                  Category: {item.category_name}
                </li>
                <li key={item.item_id + 2000} id="third">
                  £{item.price}
                </li>
                <li
                  key={item.item_id + 3000}
                  id="pic"
                  width="40px"
                  height="220px"
                >
                  <img id="item" src={item.img_url} alt={item.item_name} />
                </li>
              </ul>
            );
          }
        })}
      </main>
    </>
  );
};

export default Home;

// return <li key={item.item_id}>{item.item_name}</li>;
