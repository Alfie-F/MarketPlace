const Sell = ({ categories }) => {
  console.log(categories);
  return (
    <div>
      <nav id="splash-sell">
        Please sell at your own risk. abay takes no responsibility for any
        loses, theft, damages, loss of life, loss of sanity, lack of decorum,
        nausea, vomiting, itching, , coding jobs or lack there of imposed on, by
        or for the seller.
      </nav>
      <main className="selling-form" id="selling-form">
        <h2>Please complete this form to submit your item for sale!</h2>
        <form action="">
          <figure>
            <label htmlFor="text">What item are you selling...</label>
            <input type="text" id="test" name="item_name"></input>
          </figure>
          <figure>
            <label htmlFor="text">
              Please give a brief description of your item...
            </label>
            <input type="text" id="test" name="description"></input>
          </figure>
          <figure>
            <label htmlFor="text">
              Please provide a url for a photo of your item...
            </label>
            <input type="text" id="test" name="img_url"></input>
          </figure>
          <figure>
            <label htmlFor="text">What is your asking price...</label>
            <input type="number" id="test" name="price"></input>
          </figure>
          <figure>
            <label htmlFor="text">please choose a category</label>
            <select id="categoryDropDown-Selling">
              <option key={""} value={""}>
                {""}
              </option>
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
          </figure>
        </form>
      </main>
    </div>
  );
};

export default Sell;
