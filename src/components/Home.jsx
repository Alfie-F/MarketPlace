const Home = ({ items }) => {
  console.log(items);
  return (
    <>
      <nav>
        Welcome to ABAY, in no way shape or form affiliated with any vowel-bay
        based buying and selling platforms.
      </nav>
      <main>
        {items.map((item) => {
          return (
            <ul>
              <li key={item.item_id} id="first">
                {item.item_name}{" "}
              </li>
              <li key={item.item_id} id="second">
                Category: {item.category_name}
              </li>
              <li id="pic">
                <img
                  src="https://images.unsplash.com/photo-1519612632649-158aa883572a?fit=crop&w=600&h=600&q=80"
                  alt="picture of item"
                  width="40px"
                  height="100px"
                />
              </li>
              <li key={item.item_id} id="third">
                £{item.price}
              </li>
            </ul>
          );
        })}
      </main>
    </>
  );
};

export default Home;

// return <li key={item.item_id}>{item.item_name}</li>;
