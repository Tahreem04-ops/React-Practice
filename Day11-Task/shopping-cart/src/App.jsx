import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import "./index.css";

function App() {

  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 700,
    },
    {
      id: 2,
      name: "Headphones",
      price: 150,
    },
    {
      id: 3,
      name: "Keyboard",
      price: 80,
    },
    {
      id: 4,
      name: "Mouse",
      price: 50,
    },
  ];

  return (
    <div className="container">

      <h1>Zustand Shopping Cart</h1>

      <div className="products">

        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}

      </div>

      <Cart />

    </div>
  );
}

export default App;