import { useState } from "react";

const App = () => {
  const [fruits, setFruits] = useState([
    {
      name: "Kiwi",
      color: "green",
      price: 600,
    },
    {
      name: "Banana",
      color: "yellow",
      price: 40,
    },
    {
      name: "Apple",
      color: "red",
      price: 200,
    },
    {
      name: "Mango",
      color: "yellow",
      price: 150,
    },
  ]);

  return (
    <div>
      {fruits.map((fruit, index) => (
        <div key={index}>
          <h2>{fruit.name}</h2>
          <p>Color: {fruit.color}</p>
          <p>Price: ₹{fruit.price}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default App;
