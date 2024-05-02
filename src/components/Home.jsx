const Home = ({ items }) => {
  return (
    <>
      <nav>
        Welcome to ABAY, in no way shape or form affiliated with any vowel-bay
        based buying and selling platforms.
        <select></select>
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
              <li key={item.item_id} id="third">
                £{item.price}
              </li>
              <li id="pic" width="40px" height="220px">
                <img id="item" src={item.img_url} alt={item.item_name} />
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
