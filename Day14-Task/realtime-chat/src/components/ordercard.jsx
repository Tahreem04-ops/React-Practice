function OrderCard({ order }) {

  const getStatusColor = () => {
    switch (order.status) {
      case "Pending":
        return "#f59e0b";

      case "Preparing":
        return "#3b82f6";

      case "Delivered":
        return "#22c55e";

      default:
        return "#6b7280";
    }
  };

  return (
    <div className="order-card">

      <div
        className="status-badge"
        style={{
          background: getStatusColor(),
        }}
      >
        {order.status}
      </div>

      <h2>

        👤 {order.customer_name}

      </h2>

      <p>

        🍔 Product:
        <strong> {order.product_name}</strong>

      </p>

      <p>

        📦 Quantity:
        <strong> {order.quantity}</strong>

      </p>

      <p>

        💰 Price:
        <strong> Rs. {order.total_price}</strong>

      </p>

      <small>

        🕒 {new Date(order.created_at).toLocaleString()}

      </small>

    </div>
  );
}

export default OrderCard;