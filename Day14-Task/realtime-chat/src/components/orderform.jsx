function OrderForm({
  customerName,
  setCustomerName,
  productName,
  setProductName,
  quantity,
  setQuantity,
  price,
  setPrice,
  status,
  setStatus,
  addOrder,
}) {
  return (
    <div className="order-form">

      <input
        type="text"
        placeholder="Customer Name"
        value={customerName}
        onChange={(e) => setCustomerName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Product Name"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />

      <input
        type="number"
        placeholder="Total Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option>Pending</option>
        <option>Preparing</option>
        <option>Delivered</option>
      </select>

      <button onClick={addOrder}>
        ➕ Add Order
      </button>

    </div>
  );
}

export default OrderForm;