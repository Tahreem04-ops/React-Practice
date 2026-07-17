import useCartStore from "../store/cartStore";

function ProductCard({ product }) {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="card">
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>

      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;